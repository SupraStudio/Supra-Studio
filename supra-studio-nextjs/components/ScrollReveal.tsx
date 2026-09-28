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
    // rattrape ces cas.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // Filet de sécurité : sur certains mobiles, l'IntersectionObserver peut ne
    // jamais se déclencher pour un très grand bloc (ex. la grille du Journal
    // avec ses 16 cartes) — le seuil de 10% n'est pas franchi comme attendu,
    // et le contenu reste alors invisible (opacity: 0) indéfiniment, même
    // après un scroll complet. Sans ce filet, la page semblait "vide" sur
    // mobile alors que le contenu existait bien, juste jamais révélé.
    // Passé un court délai, on force la révélation de tout élément encore
    // masqué mais déjà présent à l'écran ou juste en dessous, sans attendre
    // un déclenchement de l'observer qui ne viendra peut-être jamais.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    }, 1200);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
