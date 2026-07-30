import type { Review } from "./reviews";
import type { Lang } from "./i18n";

// Note : le texte des avis (quote) n'est volontairement PAS traduit une fois de vrais avis
// en place — un avis client reste dans sa langue d'origine, le traduire dénaturerait ses mots.
// Seul le libellé de contexte (type de projet / ville), qui est rédigé par Supra Studio et non
// par le client, est traduit ici. Pour les avis de démonstration ci-dessous, on traduit
// exceptionnellement aussi le texte, puisqu'il ne s'agit pas d'une vraie citation.
type ReviewTranslation = {
  quote?: string;
  context?: string;
};

export const REVIEWS_I18N: Record<string, Partial<Record<"en" | "it", ReviewTranslation>>> = {
  "demo-1": {
    en: {
      quote:
        "Demo review example: an attentive team, available from the first meeting through to handover, and a result that exceeded our expectations.",
      context: "Apartment renovation, Paris",
    },
    it: {
      quote:
        "Esempio di recensione dimostrativa: un team attento e disponibile dal primo incontro fino alla consegna, con un risultato che ha superato le nostre aspettative.",
      context: "Ristrutturazione di un appartamento, Parigi",
    },
  },
  "demo-2": {
    en: {
      quote:
        "Demo review example: a real sense of detail, from the first sketch to the final finish. Careful work and a team we could trust.",
      context: "New-build house, Bordeaux",
    },
    it: {
      quote:
        "Esempio di recensione dimostrativa: un vero senso del dettaglio, dal primo schizzo all'ultima rifinitura. Un lavoro curato e un team di fiducia.",
      context: "Casa nuova, Bordeaux",
    },
  },
  "demo-3": {
    en: {
      quote:
        "Demo review example: a reassuring, available team throughout the project, attentive to our wishes and constraints.",
      context: "Garden & terrace, Sabaudia",
    },
    it: {
      quote:
        "Esempio di recensione dimostrativa: un team rassicurante e disponibile durante tutto il progetto, attento ai nostri desideri e vincoli.",
      context: "Giardino e terrazza, Sabaudia",
    },
  },
  "demo-4": {
    en: {
      quote:
        "Demo review example: smooth communication throughout the build, we felt supported at every stage of site supervision.",
      context: "Site supervision, Rome",
    },
    it: {
      quote:
        "Esempio di recensione dimostrativa: comunicazione fluida durante tutto il cantiere, ci siamo sentiti seguiti in ogni fase della direzione lavori.",
      context: "Direzione lavori, Roma",
    },
  },
  "demo-5": {
    en: {
      quote:
        "Demo review example: precise design work and rigorous site supervision — the build went smoothly, with no surprises, within the announced budget.",
      context: "Site supervision, Paris",
    },
    it: {
      quote:
        "Esempio di recensione dimostrativa: una progettazione precisa e una direzione lavori rigorosa: il cantiere è proceduto senza sorprese, nel rispetto del budget annunciato.",
      context: "Direzione lavori, Parigi",
    },
  },
};

export function localizeReview(review: Review, lang: Lang): Review {
  if (lang === "fr") return review;
  const overrides = REVIEWS_I18N[review.id]?.[lang];
  if (!overrides) return review;
  return { ...review, ...overrides };
}
