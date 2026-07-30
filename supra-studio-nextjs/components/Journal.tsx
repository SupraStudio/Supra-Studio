import { getSortedArticles } from "@/lib/journal";
import { localizeArticle } from "@/lib/journal.i18n";
import { getDict, localizedHref, type Lang } from "@/lib/i18n";

function formatDate(iso: string, lang: Lang) {
  const localeMap: Record<Lang, string> = { fr: "fr-FR", en: "en-GB", it: "it-IT" };
  return new Date(iso).toLocaleDateString(localeMap[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Journal({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  const articles = getSortedArticles().map((a) => localizeArticle(a, lang));

  return (
    <section className="journal-list">
      <div className="wrap">
        {articles.length === 0 ? (
          <p className="journal-empty reveal">{t.journalPage.empty}</p>
        ) : (
          <div className="journal-grid reveal">
            {articles.map((a) => (
              <a
                className="journal-card"
                href={localizedHref(`/journal/${a.slug}`, lang)}
                key={a.slug}
              >
                <div className="journal-card-media">
                  <img src={a.cover} alt={a.title} loading="lazy" />
                </div>
                <div className="journal-card-body">
                  <p className="journal-meta">
                    <span className="journal-category">{a.category}</span>
                    <span aria-hidden="true"> · </span>
                    <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
                  </p>
                  <h3 className="journal-card-title">{a.title}</h3>
                  <p className="journal-excerpt">{a.excerpt}</p>
                  <span className="link-arrow journal-read-more">{t.journalPage.readMore}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
