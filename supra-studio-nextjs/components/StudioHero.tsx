export default function StudioHero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/studio-hero-paris.jpg"
          alt="Toits de Paris, vue depuis Montmartre"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">Défiler</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">
          Notre vision : révéler la lumière, élever l&rsquo;ordinaire
        </h1>
      </div>
    </section>
  );
}
