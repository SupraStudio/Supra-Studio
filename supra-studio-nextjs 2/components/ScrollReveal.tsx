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
      // Léger décalage : l'élément se révèle juste avant d'être pleinement visible,
      // pour un effet fluide "au fil du scroll" plutôt qu'un déclenchement trop tardif
      // (page qui semble vide) ou trop précoce (contenu déjà là, effet figé).
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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
    // définitivement jusqu'à un rechargement complet de la page. C'est le vrai
    // correctif du bug mobile : il n'a pas besoin de révéler tout d'un coup,
    // juste de s'assurer que chaque élément est bien observé.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
