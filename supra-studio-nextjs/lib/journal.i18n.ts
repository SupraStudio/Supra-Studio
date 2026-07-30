import type { JournalArticle } from "./journal";
import type { Lang } from "./i18n";

type ArticleTranslation = {
  title?: string;
  excerpt?: string;
  category?: string;
  readingTime?: string;
  content?: string[];
  keywords?: string[];
};

export const JOURNAL_I18N: Record<string, Partial<Record<"en" | "it", ArticleTranslation>>> = {
  "bienvenue-sur-le-journal": {
    en: {
      title: "Welcome to the Supra Studio Journal",
      excerpt:
        "This is a demo article: it validates the technical setup of the Journal (list, detail page, multilingual, SEO). It will be replaced by the first real article.",
      category: "Studio",
      readingTime: "2 min",
      content: [
        "This is a demo article, generated only to verify that the Journal's technical structure works correctly: article list, detail page, English and Italian translations, SEO (sitemap, hreflang tags) and integration into the site's navigation.",
        "It will be replaced by the first real article once its content is ready. To publish a new article, simply add an entry in lib/journal.ts (French text) and its matching translation in lib/journal.i18n.ts — following the same principle used for projects.",
        "Until then, this text is intentionally neutral and should not appear as-is on the live site.",
      ],
      keywords: ["Journal", "Supra Studio", "Demo"],
    },
    it: {
      title: "Benvenuti sul Journal di Supra Studio",
      excerpt:
        "Questo è un articolo dimostrativo: convalida la configurazione tecnica del Journal (elenco, pagina di dettaglio, multilingua, SEO). Sarà sostituito dal primo articolo reale.",
      category: "Studio",
      readingTime: "2 min",
      content: [
        "Questo è un articolo dimostrativo, generato solo per verificare che la struttura tecnica del Journal funzioni correttamente: elenco degli articoli, pagina di dettaglio, traduzioni in inglese e italiano, SEO (sitemap, tag hreflang) e integrazione nel menu del sito.",
        "Sarà sostituito dal primo articolo reale non appena il contenuto sarà pronto. Per pubblicare un nuovo articolo, basta aggiungere una voce in lib/journal.ts (testo francese) e la relativa traduzione in lib/journal.i18n.ts, seguendo lo stesso principio usato per i progetti.",
        "Fino ad allora, questo testo è volutamente neutro e non deve comparire così com'è sul sito in produzione.",
      ],
      keywords: ["Journal", "Supra Studio", "Dimostrazione"],
    },
  },
};

export function localizeArticle(article: JournalArticle, lang: Lang): JournalArticle {
  if (lang === "fr") return article;
  const overrides = JOURNAL_I18N[article.slug]?.[lang];
  if (!overrides) return article;
  return { ...article, ...overrides };
}
