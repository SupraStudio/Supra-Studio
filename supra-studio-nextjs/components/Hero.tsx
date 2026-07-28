export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/projet-02-salon.jpg"
          alt="Salon rénové par Supra Studio, Paris"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">Défiler</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">
          Architecte d&rsquo;intérieur Paris Paysagiste Paris
        </h1>
        <div className="hero-foot">
          <p className="hero-sub">
            Rénovation d&rsquo;appartements, maisons neuves, commerces,
            hôtels, restaurants, bureaux et jardins, conçus dans une même
            vision architecturale.
          </p>
          <a href="/studio" className="btn btn-light">
            Découvrir le studio
          </a>
        </div>
      </div>
    </section>
  );
}

