export type Review = {
  id: string;
  quote: string;
  author: string;
  context?: string;
  rating: number; // 1 à 5
};

// ⚠️ CONTENU DE DÉMONSTRATION — à remplacer par vos 5 meilleurs avis Google réels.
//
// Pour chaque avis réel, donnez-moi :
//  - le texte exact de l'avis (on garde la langue d'origine dans laquelle il a été écrit —
//    on ne traduit pas les mots d'un client, ce serait dénaturer son avis)
//  - le prénom + l'initiale du nom du client (ex. "Claire D.")
//  - le type de projet / la ville si pertinent (ex. "Rénovation & Paysage — Bordeaux")
//  - la note (1 à 5)
//
// Il suffit ensuite de remplacer les objets ci-dessous, un par un.
export const REVIEWS: Review[] = [
  {
    id: "demo-1",
    quote:
      "Exemple d'avis de démonstration : un accompagnement à l'écoute, une équipe disponible du premier rendez-vous à la livraison, et un résultat qui dépasse nos attentes.",
    author: "Prénom N. — exemple",
    context: "Rénovation d'appartement, Paris",
    rating: 5,
  },
  {
    id: "demo-2",
    quote:
      "Exemple d'avis de démonstration : un vrai sens du détail, de la première esquisse jusqu'à la dernière finition. Un travail soigné et une équipe de confiance.",
    author: "Prénom N. — exemple",
    context: "Maison neuve, Bordeaux",
    rating: 5,
  },
  {
    id: "demo-3",
    quote:
      "Exemple d'avis de démonstration : une équipe rassurante et disponible tout au long du projet, à l'écoute de nos envies et de nos contraintes.",
    author: "Prénom N. — exemple",
    context: "Jardin & terrasse, Sabaudia",
    rating: 5,
  },
  {
    id: "demo-4",
    quote:
      "Exemple d'avis de démonstration : une communication fluide tout au long du chantier, nous nous sommes sentis accompagnés à chaque étape du suivi de travaux.",
    author: "Prénom N. — exemple",
    context: "Suivi de chantier, Rome",
    rating: 5,
  },
  {
    id: "demo-5",
    quote:
      "Exemple d'avis de démonstration : une conception précise et une maîtrise d'œuvre rigoureuse — le chantier s'est déroulé sans surprise, dans le respect du budget annoncé.",
    author: "Prénom N. — exemple",
    context: "Maîtrise d'œuvre, Paris",
    rating: 5,
  },
];

// ⚠️ À mettre à jour avec la note réelle et le nombre réel d'avis affichés sur votre fiche
// Google Business Profile.
export const GOOGLE_RATING = {
  value: 5.0,
  count: 0,
};

// ⚠️ À remplacer par le lien réel vers vos avis Google (lien "g.page/r/..." ou lien
// "Voir tous les avis" de votre fiche Google Business Profile / Google Maps).
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps";

export function getReviewsByIds(ids: string[]) {
  return ids
    .map((id) => REVIEWS.find((r) => r.id === id))
    .filter((r): r is Review => Boolean(r));
}
