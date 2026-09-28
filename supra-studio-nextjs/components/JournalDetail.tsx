import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { getArticleBySlug, getSortedArticles } from "@/lib/journal";
import { localizeArticle } from "@/lib/journal.i18n";
import { PROJECTS } from "@/lib/projects";
import { localizeProject } from "@/lib/projects.i18n";
import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export { getArticleBySlug };

function formatDate(iso: string, lang: Lang) {
  const localeMap: Record<Lang, string> = { fr: "fr-FR", en: "en-GB", it: "it-IT" };
  return new Date(iso).toLocaleDateString(localeMap[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Petit parseur pour **gras**, *italique* et [texte](url) à l'intérieur d'un paragraphe.
function renderRichText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.filter(Boolean).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const italic = part.match(/^\*([^*]+)\*$/);
    if (italic) return <em key={i}>{italic[1]}</em>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = href.startsWith("http");
      return (
        <a
          key={i}
          href={href}
          className="journal-inline-link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="journal-article-image">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function JournalDetail({ slug, lang }: { slug: string; lang: Lang }) {
  const raw = getArticleBySlug(slug);
  if (!raw) notFound();
  const article = localizeArticle(raw, lang);
  const t = getDict(lang);

  const others = getSortedArticles()
    .filter((a) => a.slug !== article.slug)
    .map((a) => localizeArticle(a, lang));

  const relatedProjects = (article.relatedProjects || [])
    .map((slug) => PROJECTS.find((p) => p.slug === slug && !p.wip))
    .filter((p): p is (typeof PROJECTS)[number] => Boolean(p))
    .map((p) => localizeProject(p, lang));

  return (
    <>
      <ScrollReveal />
      <Header lang={lang} />
      <main>
        <section className="hero journal-hero">
          <div className="hero-media">
            <img
              src={article.heroImage || article.cover}
              alt={article.title}
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow">{article.category}</p>
            <h1 className="hero-title journal-hero-title">{article.title}</h1>
            <p className="hero-sub">
              {t.journalPage.publishedOn} {formatDate(article.date, lang)}
              {article.readingTime && <> · {article.readingTime} {t.journalPage.minRead}</>}
            </p>
          </div>
        </section>

        <section className="journal-article-body">
          <div className="wrap">
            <a href={localizedHref("/journal", lang)} className="link-arrow reveal">
              {t.journalPage.backToJournal}
            </a>

            {article.intro && (
              <p className="journal-article-intro reveal">{renderRichText(article.intro)}</p>
            )}

            {article.sections ? (
              <div className="journal-article-text journal-article-sections reveal">
                {article.sections.map((section, i) => (
                  <div className="journal-article-section" key={i}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((para, j) => (
                      <Fragment key={j}>
                        <p>{renderRichText(para)}</p>
                        {section.image && section.image.afterParagraph === j && (
                          <ArticleImage
                            src={section.image.src}
                            alt={section.image.caption || section.heading}
                            caption={section.image.caption}
                          />
                        )}
                      </Fragment>
                    ))}
                    {section.image && section.image.afterParagraph === undefined && (
                      <ArticleImage
                        src={section.image.src}
                        alt={section.image.caption || section.heading}
                        caption={section.image.caption}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              article.content && (
                <div className="journal-article-text reveal">
                  {article.content.map((para, i) => (
                    <p key={i}>{renderRichText(para)}</p>
                  ))}
                </div>
              )
            )}

            {article.keywords && (
              <div className="project-keywords reveal">
                {article.keywords.map((k, i) => (
                  <span key={i}>{k}</span>
                ))}
              </div>
            )}
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="project-others">
            <div className="wrap">
              <div className="section-label reveal">
                <span>{t.journalPage.relatedProjects}</span>
              </div>
              <div className="projects-stack reveal">
                {relatedProjects.map((p) => (
                  <a
                    className="project-teaser"
                    href={localizedHref(`/projets/${p.slug}`, lang)}
                    key={p.slug}
                  >
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <div className="overlay" />
                    <div className="info">
                      <p className="cat">{p.cat}</p>
                      <p className="name">{p.name}</p>
                      <p className="location">{p.location}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="project-others">
            <div className="wrap">
              <div className="section-label reveal">
                <span>{t.journalPage.discoverAlso}</span>
              </div>
              <div className="journal-grid journal-grid-compact reveal">
                {others.slice(0, 2).map((a) => (
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
                      </p>
                      <h3 className="journal-card-title">{a.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
