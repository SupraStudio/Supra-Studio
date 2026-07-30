export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  // Format ISO (YYYY-MM-DD) — utilisé pour le tri, l'affichage et les données structurées.
  date: string;
  category: string;
  cover: string;
  readingTime?: string;
  content: string[];
  keywords?: string[];
};

// Source de vérité en français. Les traductions EN/IT vivent dans journal.i18n.ts
// (même logique que lib/projects.ts / lib/projects.i18n.ts).
//
// ⚠️ Le premier article ci-dessous est un article de DÉMONSTRATION, uniquement là
// pour valider que la structure technique fonctionne de bout en bout (liste, page
// détail, sitemap, hreflang, i18n). À remplacer par le premier vrai article dès
// qu'il sera prêt — il suffit d'ajouter un nouvel objet dans ce tableau et sa
// traduction correspondante dans journal.i18n.ts.
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "bienvenue-sur-le-journal",
    title: "Bienvenue sur le Journal de Supra Studio",
    excerpt:
      "Cet article est un exemple de démonstration : il valide la mise en place technique du Journal (liste, page détail, multilingue, SEO). Il sera remplacé par le premier vrai article.",
    date: "2026-08-04",
    category: "Studio",
    cover: "/assets/images/fondateurs.jpg",
    readingTime: "2 min",
    content: [
      "Ceci est un article de démonstration, généré uniquement pour vérifier que la structure technique du Journal fonctionne correctement : liste des articles, page de détail, traductions anglaise et italienne, référencement (sitemap, balises hreflang) et intégration dans le menu du site.",
      "Il sera remplacé par le premier article réel dès que son contenu sera prêt. Pour publier un nouvel article, il suffit d'ajouter une entrée dans lib/journal.ts (texte français) et sa traduction correspondante dans lib/journal.i18n.ts — exactement selon le même principe que pour les projets.",
      "D'ici là, ce texte reste volontairement neutre et ne doit pas apparaître tel quel sur le site en production.",
    ],
    keywords: ["Journal", "Supra Studio", "Démonstration"],
  },
];

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

// Articles triés du plus récent au plus ancien.
export function getSortedArticles() {
  return [...JOURNAL_ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}
