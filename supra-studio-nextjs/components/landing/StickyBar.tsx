"use client";

import { useEffect, useState } from "react";
import { ADS_LABEL_PHONE, PHONE_HREF, trackConversion, trackEvent } from "@/lib/landing";

// Barre d'action fixe en bas de l'écran (mobile uniquement, voir landing.css).
// Le bouton principal est « Être rappelé » (formulaire) ; « Appeler » est secondaire.
// Elle n'apparaît que lorsque le bouton « Appeler » de l'en-tête (en haut de la page) n'est
// plus visible à l'écran : inutile de dupliquer les boutons tant que celui du haut se voit.
// Tant que le bandeau cookies est affiché, la barre se place juste au-dessus pour ne pas
// être masquée (le bandeau est translucide et recouvrirait les boutons).
export default function StickyBar() {
  const [offset, setOffset] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const topCall = document.querySelector<HTMLElement>(".lp-header-call");
    if (!topCall || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(topCall);
    return () => io.disconnect();
  }, []);

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
    <div
      className={`lp-sticky${shown ? " is-shown" : ""}`}
      style={{ bottom: offset }}
      aria-hidden={!shown}
    >
      <a
        href="#formulaire"
        className="lp-sticky-form"
        onClick={() => trackEvent("lp_cta_click", { location: "barre_mobile" })}
      >
        Être rappelé
      </a>
      <a
        href={PHONE_HREF}
        className="lp-sticky-call"
        onClick={() => {
          trackConversion(ADS_LABEL_PHONE);
          trackEvent("lp_phone_click", { location: "barre_mobile" });
        }}
      >
        Appeler
      </a>
    </div>
  );
}
