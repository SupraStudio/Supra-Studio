import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Hero({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/projet-02-salon.jpg"
          alt="Salon rénové par Supra Studio, Paris"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">{t.scroll}</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">
          <span className="hero-title-line">{t.home.heroTitleLines[0]}</span>
          <span className="hero-title-line">{t.home.heroTitleLines[1]}</span>
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
