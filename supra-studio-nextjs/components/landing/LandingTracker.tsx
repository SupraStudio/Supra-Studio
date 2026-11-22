"use client";

import { useEffect } from "react";
import { trackEvent, trackEventOnce } from "@/lib/landing";

// Suivi du parcours sur la landing page (GA4), sans rien afficher :
// - lp_form_visible : le formulaire apparaît au moins à moitié à l'écran (une fois) ;
// - lp_scroll : profondeur de lecture atteinte (25, 50, 75, 100 %), une fois chacune ;
// - lp_cta_click : clic sur un bouton « Décrire mon projet » (attribut data-track-cta).
// Les événements ne partent que si le visiteur a accepté les cookies (voir trackEvent).
export default function LandingTracker() {
  useEffect(() => {
    // 1. Formulaire vu
    const form = document.querySelector(".lp-form");
    let io: IntersectionObserver | undefined;
    if (form && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            trackEventOnce("lp_form_visible");
            io?.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      io.observe(form);
    }

    // 2. Profondeur de lecture
    const marks = [25, 50, 75, 100];
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      for (const m of marks) {
        if (pct >= m - 1) trackEventOnce(`lp_scroll_${m}`, { percent: m });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. Boutons « Décrire mon projet »
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track-cta]");
      if (el) trackEvent("lp_cta_click", { location: el.dataset.trackCta || "autre" });
    }
    document.addEventListener("click", onClick);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
