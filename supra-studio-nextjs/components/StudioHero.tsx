import { getDict, type Lang } from "@/lib/i18n";

export default function StudioHero({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/studio-hero-paris.jpg"
          alt="Toits de Paris, vue depuis Montmartre"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">{t.scroll}</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">{t.studioPage.heroTitle}</h1>
      </div>
    </section>
  );
}
