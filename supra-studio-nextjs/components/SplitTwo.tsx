import { getDict, type Lang } from "@/lib/i18n";

export default function SplitTwo({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="split-two">
      <div className="wrap split-two-grid">
        <div className="reveal">
          <div className="section-label">
            <span>{t.studioPage.partnersLabel}</span>
          </div>
          <h3 className="section-title">{t.studioPage.partnersTitle}</h3>
          <p>{t.studioPage.partnersText}</p>
        </div>

        <div className="reveal">
          <div className="section-label">
            <span>{t.studioPage.valuesLabel}</span>
          </div>
          <h3 className="section-title">{t.studioPage.valuesTitle}</h3>
          <p>{t.studioPage.valuesText}</p>
        </div>
      </div>
    </section>
  );
}
