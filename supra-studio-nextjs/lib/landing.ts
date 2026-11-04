// Réglages de la landing page Google Ads (suprastudio.fr/votre-projet).
// Tout ce qui peut changer est regroupé ici.

// --- Google Ads ---
export const ADS_ID = "AW-18555508947";
// Conversion principale « Formulaire envoyé » (déclenchée au chargement de la page merci)
export const ADS_LABEL_FORM = "rkj_CLbf-bEdENOx-o9F";
// Conversion secondaire « Clic téléphone » : coller ici le libellé quand il sera créé.
// Tant qu'il est vide, aucun événement n'est envoyé.
export const ADS_LABEL_PHONE = "";

// --- Réception des prospects (Google Apps Script → Google Sheet + email) ---
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxdy5B4DIh2_LbN52COMUNhUmnm9ZMVeTqM_mGDulbcmGrwdIfycqxKuNBBGwuNT3U/exec";

// --- Coordonnées ---
export const PHONE_DISPLAY = "06 43 85 37 61";
export const PHONE_HREF = "tel:+33643853761";
export const CALLBACK_PROMISE = "sous 2 h ouvrées, du lundi au vendredi";

// --- Chemins ---
export const LANDING_PATH = "/votre-projet";
export const THANKS_PATH = "/votre-projet/merci";

// --- Étapes du formulaire ---
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
      "Aménagement d'un local professionnel",
    ],
  },
  {
    field: "budget",
    question: "Quel budget travaux envisagez-vous ?",
    options: [
      "Moins de 50 000 €",
      "50 000 à 100 000 €",
      "100 000 à 150 000 €",
      "Plus de 150 000 €",
      "Je ne sais pas encore",
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
