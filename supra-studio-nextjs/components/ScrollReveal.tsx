"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      // rootMargin généreux : on révèle le contenu bien avant qu'il n'entre
      // réellement dans le viewport, pour éviter l'impression de "page vide"
      // en scrollant (particulièrement sensible sur mobile).
      { threshold: 0.05, rootMargin: "0px 0px 200px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        io.observe(el);
      });
    };

    // Premier passage immédiat.
    observeAll();

    // Certains éléments ".reveal" peuvent être ajoutés au DOM après ce premier
    // passage (hydratation différée, contenu client). Un MutationObserver
    // rattrape ces cas — sans lui, ces éléments restaient invisibles
    // définitivement jusqu'à un rechargement complet de la page.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // Filet de sécurité : si, pour une raison quelconque (navigateur ancien,
    // timing particulier), un élément n'a toujours pas été révélé après 1,5s,
    // on le rend visible directement plutôt que de le laisser caché.
    const safety = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 1500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
