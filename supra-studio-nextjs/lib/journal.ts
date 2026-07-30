export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  // Format ISO (YYYY-MM-DD) — utilisé pour le tri, l'affichage et les données structurées.
  date: string;
  category: string;
  cover: string;
  // Image utilisée pour le bandeau (hero) de la page détail. Si absente, on retombe sur `cover`.
  heroImage?: string;
  readingTime?: string;
  // Articles courts : paragraphes simples, sans sous-titres.
  content?: string[];
  // Articles longs : sections avec sous-titre H2 + paragraphes (comme les pages projet).
  sections?: { heading: string; paragraphs: string[] }[];
  keywords?: string[];
};

// Source de vérité en français. Les traductions EN/IT vivent dans journal.i18n.ts
// (même logique que lib/projects.ts / lib/projects.i18n.ts).
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "pourquoi-faire-appel-architecte-interieur-paris",
    title: "Pourquoi faire appel à un architecte d'intérieur à Paris ?",
    excerpt:
      "Rénovation, gain de temps, réseau d'artisans, valorisation du bien : découvrez pourquoi faire appel à un architecte d'intérieur à Paris change tout dans votre projet.",
    date: "2026-08-04",
    category: "Conseils & expertise",
    cover: "/assets/images/journal-architecte-interieur-paris.png",
    // Bandeau de la page détail : on reprend l'image du hero de la page Studio, pour la
    // cohérence visuelle entre le Journal et le reste du site.
    heroImage: "/assets/images/studio-hero-paris.jpg",
    readingTime: "6 min",
    sections: [
      {
        heading:
          "Un métier qui va bien au-delà du choix des couleurs et du mobilier",
        paragraphs: [
          "C'est sans doute l'idée reçue la plus tenace : on imagine l'architecte d'intérieur comme quelqu'un qui vient choisir une peinture ou assortir des coussins. En réalité, son travail commence bien avant — dans la compréhension de l'existant. Contraintes structurelles du bâti, circulation de la lumière naturelle, emplacement des réseaux (eau, électricité, ventilation), règles de copropriété : autant d'éléments techniques qu'un œil non averti ne sait pas toujours lire, et qui déterminent pourtant ce qu'il est réellement possible de faire dans un lieu.",
          "Un architecte d'intérieur conçoit un projet global — plans, volumes, matières, lumière, usages — avant de s'intéresser à la décoration. C'est cette vision d'ensemble qui distingue un intérieur pensé d'un intérieur simplement décoré.",
        ],
      },
      {
        heading: "Gagner du temps et éviter les erreurs coûteuses",
        paragraphs: [
          "À Paris, un projet de rénovation mal anticipé se traduit vite par des surprises : un mur porteur qu'on ne peut pas abattre, une cuisine qu'il faut déplacer à cause d'une évacuation existante, des travaux qui prennent deux fois plus de temps que prévu faute d'avoir été correctement séquencés.",
          "Un architecte d'intérieur identifie ces contraintes en amont, dès la phase d'étude de faisabilité, avant que le chantier ne commence. Ce travail préparatoire, souvent perçu comme une dépense supplémentaire, est en réalité ce qui évite les dépenses imprévues les plus importantes : reprises de travaux, changements de plan en cours de chantier, matériaux commandés puis finalement inadaptés.",
        ],
      },
      {
        heading: "Un accès à un réseau d'artisans et d'entreprises qualifiées",
        paragraphs: [
          "Trouver un artisan de confiance à Paris — disponible, compétent, capable de respecter un délai — reste l'un des points les plus chronophages d'un projet de rénovation mené seul. Un architecte d'intérieur travaille avec un réseau d'entreprises et d'artisans déjà éprouvés, choisis pour la qualité de leur travail autant que pour leur fiabilité.",
          "Cet accompagnement ne s'arrête d'ailleurs pas à la mise en relation : le suivi de chantier permet de vérifier que ce qui est réalisé correspond fidèlement à ce qui a été conçu, sans que le client ait à être présent sur site en permanence pour arbitrer chaque détail.",
        ],
      },
      {
        heading: "Valoriser durablement votre bien immobilier",
        paragraphs: [
          "Un intérieur bien pensé — qui optimise la lumière, fluidifie les circulations et exploite intelligemment chaque mètre carré — a un impact direct sur la valeur d'un bien, particulièrement dans un marché parisien où chaque mètre carré compte. À l'inverse, une rénovation mal conçue, même avec des matériaux de qualité, peut au mieux ne rien apporter, au pire desservir la revente future.",
          "Faire appel à un architecte d'intérieur, c'est donc aussi un choix patrimonial : celui d'un lieu conçu pour traverser le temps, plutôt que de suivre une tendance qui se démodera.",
        ],
      },
      {
        heading: "Un intérieur pensé pour votre mode de vie, pas pour un catalogue",
        paragraphs: [
          "Chaque foyer, chaque famille, chaque manière de recevoir ou de travailler chez soi est différente. Un bon architecte d'intérieur ne propose pas un style figé à appliquer partout : il construit une réponse sur-mesure, à partir de vos usages réels — la façon dont vous circulez dans votre logement, dont vous recevez, dont vous travaillez, dont vous vivez au quotidien.",
          "C'est cette dimension sur-mesure qui distingue un projet d'architecture intérieure d'un simple relooking : le lieu s'adapte à vous, pas l'inverse.",
        ],
      },
      {
        heading: "Pourquoi faire appel à Supra Studio ?",
        paragraphs: [
          "Chez Supra Studio, nous abordons chaque projet avec une conviction simple : la lumière et la justesse des matériaux suffisent, la plupart du temps, à transformer un lieu — sans artifice ni superflu. Notre studio, fondé par un duo franco-italien, réunit une double compétence en architecture d'intérieur et en architecture paysagère, une combinaison rare qui nous permet de penser vos espaces intérieurs et extérieurs comme un tout cohérent, plutôt que comme deux projets séparés.",
          "Concrètement, notre accompagnement se déroule en quatre étapes claires : une **visite conseil** pour comprendre votre espace et vos besoins avant tout engagement, une étude de **faisabilité** technique et budgétaire, une phase de **conception** où plans, volumes et matières prennent forme, puis un **suivi de travaux** rigoureux jusqu'à la livraison — avec notre réseau d'artisans et d'entreprises locales, choisis avec la même exigence à chaque projet.",
          "Basés entre Paris, Bordeaux et Rome, nous privilégions les matériaux naturels, les lignes épurées et une approche écoresponsable, pour des intérieurs sensibles et durables plutôt que suivant une mode passagère. Que votre projet soit une rénovation d'appartement, la conception d'une maison neuve ou l'aménagement d'un jardin, notre studio vous accompagne de la première esquisse à la réception du chantier.",
          "**Vous avez un projet de rénovation ou d'aménagement intérieur à Paris ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour une première visite conseil, ou [contactez-nous](/contact) pour en discuter.",
        ],
      },
    ],
    keywords: [
      "Architecte d'intérieur Paris",
      "Rénovation appartement Paris",
      "Conseils rénovation",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

// Articles triés du plus récent au plus ancien.
export function getSortedArticles() {
  return [...JOURNAL_ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}
