// Réglages de la landing page Google Ads (suprastudio.fr/votre-projet).
// Tout ce qui peut changer est regroupé ici.

// --- Google Ads ---
export const ADS_ID = "AW-18555508947";
// Conversion principale « Formulaire envoyé » (déclenchée au chargement de la page merci)
export const ADS_LABEL_FORM = "rkj_CLbf-bEdENOx-o9F";
// Conversion secondaire « Clic téléphone » : coller ici le libellé quand il sera créé.
// Tant qu'il est vide, aucun événement n'est envoyé.
export const ADS_LABEL_PHONE = "O2UTCIGYjLIdENOx-o9F";

// --- Réception des prospects (Google Apps Script → Google Sheet + email) ---
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxdy5B4DIh2_LbN52COMUNhUmnm9ZMVeTqM_mGDulbcmGrwdIfycqxKuNBBGwuNT3U/exec";

// --- Coordonnées ---
export const PHONE_DISPLAY = "06 43 85 37 61";
export const PHONE_HREF = "tel:+33643853761";
export const CALLBACK_PROMISE = "sous 24 h, du lundi au vendredi";

// --- Chemins ---
export const LANDING_PATH = "/votre-projet";
export const THANKS_PATH = "/votre-projet/merci";

// --- Étapes du formulaire ---
// La question du budget a été retirée (nov. 2026) : elle freinait les demandes ; le budget
// est abordé lors du rappel téléphonique. Pour la remettre, recréer une étape field: "budget".
export type Step = {
  field: "proprietaire" | "type_bien" | "projet" | "budget" | "delai";
  question: string;
  options: string[];
};

export const FORM_STEPS: Step[] = [
  {
    field: "proprietaire",
    question: "Êtes-vous propriétaire ?",
    options: ["Oui", "Non"],
  },
  {
    field: "type_bien",
    question: "Quel type de bien ?",
    options: [
      "Appartement",
      "Duplex",
      "Maison de ville",
      "Villa / maison",
      "Local commercial",
      "Cabinet médical ou paramédical",
    ],
  },
  {
    field: "projet",
    question: "Quel est votre projet ?",
    options: [
      "Rénovation complète",
      "Rénovation partielle",
      "Réaménagement des espaces",
      "Extension",
      "Aménagement extérieur",
      "Autre",
    ],
  },
  {
    field: "delai",
    question: "Quand souhaitez-vous démarrer ?",
    options: [
      "Dès que possible",
      "Dans 3 à 6 mois",
      "Dans 6 à 12 mois",
      "Je me renseigne",
    ],
  },
];

// Clés de sessionStorage partagées entre le formulaire et la page merci
export const SS_GCLID = "supra_gclid";
export const SS_LEAD = "supra_lead_sent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Envoie un événement de conversion Google Ads (ignoré si la balise n'est pas chargée
// ou si le visiteur a refusé les cookies : rien ne part sans consentement).
export function trackConversion(label: string, extra: Record<string, unknown> = {}) {
  if (!label || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: `${ADS_ID}/${label}`,
    value: 1.0,
    currency: "EUR",
    ...extra,
  });
}

// --- Suivi Google Analytics 4 (parcours sur la landing page) ---
// Identifiant GA4 défini dans Vercel (variable NEXT_PUBLIC_GA_ID). S'il est absent,
// aucun événement n'est envoyé.
const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const CONSENT_KEY = "supra_cookie_consent";
const sentOnce = new Set<string>();

// --- Comptage anonyme du parcours (sans cookie, exempté de consentement CNIL) ---
// Chaque étape atteinte envoie seulement « étape X, source, type d'appareil » au script
// Google Apps Script, qui ajoute +1 dans l'onglet « Entonnoir » de la Google Sheet.
// Aucun cookie, aucun stockage, aucun identifiant : une étape n'est comptée qu'une fois
// par page chargée. Rien n'est compté hors de suprastudio.fr, pour les robots,
// ni si l'adresse contient ?nocount (pour vos propres visites).
const counted = new Set<string>();

export function countStep(step: string) {
  if (typeof window === "undefined" || counted.has(step)) return;
  counted.add(step);
  try {
    if (!/(^|\.)suprastudio\.fr$/.test(window.location.hostname)) return;
    if (navigator.webdriver) return;
    const url = new URLSearchParams(window.location.search);
    if (url.has("nocount")) return;
    const body = new URLSearchParams({
      funnel: step,
      source: url.has("gclid") ? "ads" : "autre",
      device: window.matchMedia("(max-width: 860px)").matches ? "mobile" : "ordinateur",
    });
    if (!navigator.sendBeacon?.(LEADS_ENDPOINT, body)) {
      fetch(LEADS_ENDPOINT, { method: "POST", mode: "no-cors", keepalive: true, body }).catch(() => {});
    }
  } catch {
    // le comptage ne doit jamais gêner le visiteur
  }
}

// Correspondance entre les événements de la page et les colonnes de l'entonnoir
function funnelStepFor(name: string, params: Record<string, string | number>): string | null {
  switch (name) {
    case "lp_form_visible": return "formulaire_vu";
    case "lp_cta_click": return "bouton_projet";
    case "lp_form_step": return `reponse_${params.step_number}`;
    case "lp_contact_view": return "coordonnees";
    case "lp_form_error": return "erreur";
    case "generate_lead": return "envoi";
    case "lp_phone_click": return "appel";
    case "lp_scroll_50": return "lecture_50";
    default: return null;
  }
}

// Envoie un événement GA4 uniquement si le visiteur a accepté les cookies.
// Ne JAMAIS y mettre le prénom, le téléphone, l'email ou le code postal.
// Le comptage anonyme de l'entonnoir, lui, part pour tous les visiteurs.
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  const step = funnelStepFor(name, params);
  if (step) countStep(step);
  if (!GA4_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    if (window.localStorage.getItem(CONSENT_KEY) !== "accepted") return;
  } catch {
    return;
  }
  window.gtag("event", name, { ...params, send_to: GA4_ID });
}

// Même chose, mais une seule fois par page vue (ex. « formulaire vu »).
export function trackEventOnce(name: string, params: Record<string, string | number> = {}) {
  if (sentOnce.has(name)) return;
  sentOnce.add(name);
  trackEvent(name, params);
}
