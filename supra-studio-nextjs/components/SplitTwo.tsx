import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function SplitTwo({
  lang = "fr",
  compact = false,
}: {
  lang?: Lang;
  compact?: boolean;
}) {
  const t = getDict(lang);
  const studioHref = localizedHref("/studio", lang);

  return (
    <section className={`split-two${compact ? " split-two-compact" : ""}`}>
      <div className="wrap split-two-grid">
        <div className="reveal">
          <div className="section-label">
            <span>{t.studioPage.partnersLabel}</span>
          </div>
          <h3 className="section-title">{t.studioPage.partnersTitle}</h3>
          <p>{compact ? t.studioPage.partnersTagline : t.studioPage.partnersText}</p>
          {compact && (
            <a href={studioHref} className="link-arrow split-two-more">
              {t.studioPage.learnMore}
            </a>
          )}
        </div>

        <div className="reveal">
          <div className="section-label">
            <span>{t.studioPage.valuesLabel}</span>
          </div>
          <h3 className="section-title">{t.studioPage.valuesTitle}</h3>
          <p>{compact ? t.studioPage.valuesTagline : t.studioPage.valuesText}</p>
          {compact && (
            <a href={studioHref} className="link-arrow split-two-more">
              {t.studioPage.learnMore}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
