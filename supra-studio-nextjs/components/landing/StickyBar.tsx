"use client";

import { useEffect, useState } from "react";
import { ADS_LABEL_PHONE, PHONE_HREF, trackConversion } from "@/lib/landing";

// Barre d'action fixe en bas de l'écran (mobile uniquement, voir landing.css).
// Le bouton principal est « Être rappelé » (formulaire) ; « Appeler » est secondaire.
// Tant que le bandeau cookies est affiché, la barre se place juste au-dessus pour ne pas
// être masquée (le bandeau est translucide et recouvrirait les boutons).
export default function StickyBar() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function measure() {
      const banner = document.querySelector<HTMLElement>(".cookie-banner");
      setOffset(banner ? banner.offsetHeight : 0);
    }
    measure();
    const mo = new MutationObserver(measure);
    mo.observe(document.body, { childList: true });
    window.addEventListener("resize", measure);
    window.addEventListener("supra-consent", measure);
    return () => {
      mo.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("supra-consent", measure);
    };
  }, []);

  return (
    <div className="lp-sticky" style={{ bottom: offset }}>
      <a href="#formulaire" className="lp-sticky-form">
        Être rappelé
      </a>
      <a
        href={PHONE_HREF}
        className="lp-sticky-call"
        onClick={() => trackConversion(ADS_LABEL_PHONE)}
      >
        Appeler
      </a>
    </div>
  );
}
