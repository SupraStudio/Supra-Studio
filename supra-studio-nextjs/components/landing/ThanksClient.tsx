"use client";

import { useEffect, useState } from "react";
import { ADS_ID, ADS_LABEL_FORM, SS_LEAD, trackConversion } from "@/lib/landing";

const CONSENT_KEY = "supra_cookie_consent";

function consentGiven() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

// La balise Google est-elle chargée et configurée pour Google Ads ?
function tagReady() {
  const w = window as unknown as { google_tag_manager?: Record<string, unknown> };
  return typeof window.gtag === "function" && Boolean(w.google_tag_manager?.[ADS_ID]);
}

export default function ThanksClient() {
  const [prenom, setPrenom] = useState("");

  useEffect(() => {
    let lead: { prenom?: string; id?: string } | null = null;
    try {
      const raw = window.sessionStorage.getItem(SS_LEAD);
      lead = raw ? JSON.parse(raw) : null;
    } catch {
      lead = null;
    }
    if (lead?.prenom) setPrenom(lead.prenom);

    // Pas de conversion si on arrive ici sans avoir envoyé le formulaire
    // (visite directe, actualisation après coup) : les chiffres restent justes.
    if (!lead?.id) return;
    const leadId = lead.id;

    let done = false;
    let timer: number | undefined;

    function fire() {
      if (done) return;
      done = true;
      trackConversion(ADS_LABEL_FORM, { transaction_id: leadId });
      try {
        window.sessionStorage.removeItem(SS_LEAD);
      } catch {
        // ignore
      }
    }

    // Attend que la balise soit chargée (jusqu'à 15 s), uniquement si cookies acceptés.
    function waitAndFire() {
      if (!consentGiven()) return;
      let tries = 0;
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        tries += 1;
        // Balise prête, ou au bout de 4 s : la commande « config » est alors forcément
        // en file d'attente, l'événement sera traité dans le bon ordre.
        if (tagReady() || (tries >= 16 && typeof window.gtag === "function")) {
          window.clearInterval(timer);
          fire();
        } else if (tries > 60) {
          window.clearInterval(timer);
        }
      }, 250);
    }

    waitAndFire();
    // Si le visiteur accepte les cookies sur cette page, on déclenche à ce moment-là.
    function onConsent(e: Event) {
      if ((e as CustomEvent).detail === "accepted") waitAndFire();
    }
    window.addEventListener("supra-consent", onConsent);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("supra-consent", onConsent);
    };
  }, []);

  return <>{prenom ? `Merci ${prenom}, votre demande est bien reçue.` : "Merci, votre demande est bien reçue."}</>;
}
