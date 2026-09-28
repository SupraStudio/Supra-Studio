import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Hero({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/architecte-interieur-paris-salon-renove.jpg"
          alt="Salon rénové par Supra Studio, Paris"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">{t.scroll}</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">
          {t.home.heroTitleLines.map((line: string, i: number) => {
            const hasPipe = line.startsWith("| ");
            return (
              <span key={i} className="hero-title-line">
                {hasPipe && <span className="hero-title-pipe"> | </span>}
                {hasPipe ? line.slice(2) : line}
              </span>
            );
          })}
        </h1>
        <div className="hero-foot">
          <p className="hero-sub">{t.home.heroSub}</p>
          <a href={localizedHref("/studio", lang)} className="btn btn-light">
            {t.discoverStudio}
          </a>
        </div>
      </div>
    </section>
  );
}
