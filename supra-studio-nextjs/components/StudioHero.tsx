import { getDict, type Lang } from "@/lib/i18n";

export default function StudioHero({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/toits-paris-architecte-interieur-paysagiste.jpg"
          alt="Toits de Paris, vue depuis Montmartre"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">{t.scroll}</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">{t.studioPage.heroTitle}</h1>
        <div className="hero-definition">
          <p className="hero-definition-word">
            {t.studioPage.definition.word}
            <span className="hero-definition-ipa">{t.studioPage.definition.ipa}</span>
          </p>
          <p className="hero-definition-pos">{t.studioPage.definition.pos}</p>
          <ol className="hero-definition-list">
            {t.studioPage.definition.defs.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ol>
          <p className="hero-definition-epigraph">— {t.studioPage.definition.epigraph}</p>
        </div>
      </div>
    </section>
  );
}
