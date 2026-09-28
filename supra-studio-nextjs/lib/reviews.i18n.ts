import type { Review } from "./reviews";
import type { Lang } from "./i18n";

// Note : le texte des avis (quote) n'est jamais traduit — un avis client reste dans sa
// langue d'origine, le traduire dénaturerait ses mots. Seul le libellé de contexte
// (type de projet / ville), rédigé par Supra Studio et non par le client, est traduit ici.
type ReviewTranslation = {
  context?: string;
};

export const REVIEWS_I18N: Record<string, Partial<Record<"en" | "it", ReviewTranslation>>> = {
  henri: {
    en: { context: "Kléber house, Bordeaux" },
    it: { context: "Casa Kléber, Bordeaux" },
  },
  "antonella-de-ninno": {
    en: { context: "Giardino De Ninno, Sabaudia" },
    it: { context: "Giardino De Ninno, Sabaudia" },
  },
  "brian-duy-nguyen": {
    en: { context: "Casa Duy, Rome" },
    it: { context: "Casa Duy, Roma" },
  },
};

export function localizeReview(review: Review, lang: Lang): Review {
  if (lang === "fr") return review;
  const overrides = REVIEWS_I18N[review.id]?.[lang];
  if (!overrides) return review;
  return { ...review, ...overrides };
}
