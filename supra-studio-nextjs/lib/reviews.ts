export type Review = {
  id: string;
  quote: string;
  author: string;
  context?: string;
  rating: number; // 1 à 5
};

// Avis Google réels de Supra Studio (capturés depuis la messagerie Google Business Profile,
// en attente de vérification par Google au moment de l'intégration — juillet 2026).
//
// Le prénom + l'initiale du nom sont conservés (plutôt que le nom complet) par discrétion,
// même si les avis sont publics sur Google.
//
// Le texte de chaque avis est conservé dans sa langue d'origine (celle utilisée par le
// client) — on ne traduit pas les mots d'un client, ce serait dénaturer son avis. Seul le
// libellé de "contexte" (type de projet), rédigé par Supra Studio, est traduit en EN/IT
// dans reviews.i18n.ts quand il est présent.
export const REVIEWS: Review[] = [
  {
    id: "margot-cohen",
    quote:
      "Je recommande vivement Paul et Beatrice de Supra Studio. J'ai eu l'occasion de découvrir plusieurs de leurs réalisations et j'ai été marqué par la qualité de leur travail, leur créativité et leur rigueur. En tant qu'architectes à Paris, ils savent concevoir des projets élégants, fonctionnels et parfaitement adaptés aux attentes de leurs clients. Le regard de paysagiste apporte également une vraie valeur ajoutée aux aménagements extérieurs. Une équipe sérieuse, disponible et passionnée que je recommande sans hésitation.",
    author: "Margot C.",
    rating: 5,
  },
  {
    id: "louis-guiter",
    quote:
      "Une agence qui se démarque par sa manière de penser les projets dans leur ensemble. Supra Studio ne se limite pas à dessiner des espaces : ils cherchent à créer des lieux cohérents, avec une vraie attention portée à l'histoire du site, aux usages et à l'environnement. Leur double compétence d'architectes et de paysagiste apporte une vision rare, notamment dans la relation entre bâti et nature. Installés à Paris, Paul et Beatrice développent une écriture singulière et sensible. Une belle rencontre avec une équipe investie et passionnée.",
    author: "Louis G.",
    rating: 5,
  },
  {
    id: "henri",
    quote:
      "Un grand merci à Supra Studio pour nous avoir accompagnés dans la conception de notre maison familiale. Le projet n'était pas simple avec une parcelle étroite, mais ils ont su imaginer une maison dans laquelle nous nous projetons pleinement. Nous avons beaucoup apprécié leur capacité à créer de l'espace et de la lumière en jouant avec la verticalité, tout en restant attentifs à nos besoins et à notre façon de vivre. Une belle expérience avec une équipe à l'écoute et pleine d'idées.",
    author: "Henri",
    context: "Maison Kléber, Bordeaux",
    rating: 5,
  },
  {
    id: "gui-hun",
    quote:
      "Installés à Paris, Paul, paysagiste, et Béatrice, architecte, développent une écriture singulière et sensible. Une belle rencontre avec une équipe investie et passionnée. Supra Studio ne se limite pas à dessiner des espaces : l'agence cherche à créer des lieux cohérents, en portant une attention particulière à l'histoire du site, aux usages et à l'environnement. Leur double expertise apporte un regard singulier sur les relations entre bâti et le monde végétal. À votre écoute, ils sauront vous accompagner dans vos projets selon vos besoins. N'hésitez pas à les solliciter.",
    author: "Gui H.",
    rating: 5,
  },
  {
    id: "antonella-de-ninno",
    // ⚠️ Le rapprochement avec le projet "Giardino De Ninno" (Sabaudia) est une déduction
    // de ma part à partir du nom de famille — à confirmer.
    quote:
      "J'ai eu une excellente expérience avec Supra Studio. Ils ont conçu un jardin méditerranéen exactement comme je l'imaginais, en parfaite harmonie avec mes goûts. Très à l'écoute dès le début, ils ont su transformer mes besoins en solutions créatives et concrètes. Le travail a été réalisé rapidement et avec beaucoup de professionnalisme. Je recommande vivement pour leur compétence, leur efficacité et leur approche personnalisée.",
    author: "Antonella D.",
    context: "Giardino De Ninno, Sabaudia",
    rating: 5,
  },
  {
    id: "brian-duy-nguyen",
    // Avis écrit en anglais par le client — conservé dans sa langue d'origine sur les 3
    // versions du site (FR/EN/IT), conformément au principe ci-dessus.
    // ⚠️ Le rapprochement avec le projet "Casa Duy" (Rome) est une déduction de ma part
    // à partir du nom de famille et de la mention "house project in Rome" — à confirmer.
    quote:
      "I had a fantastic experience working with Supra Studio. Beatrice and Paul have been helping me with my house project in Rome, and I couldn't be happier with their work. They are not only highly skilled but also incredibly thoughtful in the way they guide you through the entire process. From the very beginning, they took the time to understand my vision and consistently brought fresh, creative ideas that I wouldn't have thought of myself. What I really appreciated is how they made everything feel clear and manageable, even when decisions were complex. Their professionalism, attention to detail, and ability to translate ideas into something tangible truly stand out. I always felt supported and confident moving forward thanks to their guidance. Highly recommend them if you're looking for a team that combines creativity with a strong sense of client care.",
    author: "Brian D.",
    context: "Casa Duy, Rome",
    rating: 5,
  },
];

// ⚠️ Les 6 avis ci-dessus sont tous des 5 étoiles, mais peuvent ne pas représenter la
// totalité des avis publiés sur votre fiche Google (encore en cours de vérification par
// Google au moment de l'intégration). À ajuster si le total diffère une fois la fiche
// publique et vérifiée.
export const GOOGLE_RATING = {
  value: 5.0,
  count: 6,
};

// ⚠️ À remplacer par le lien réel vers vos avis Google dès que votre fiche sera vérifiée
// (lien "g.page/r/..." ou lien "Voir tous les avis" de votre fiche Google Business Profile).
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps";

export function getReviewsByIds(ids: string[]) {
  return ids
    .map((id) => REVIEWS.find((r) => r.id === id))
    .filter((r): r is Review => Boolean(r));
}
