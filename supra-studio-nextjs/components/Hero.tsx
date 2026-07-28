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
        <img
          className="hero-logo"
          src="/assets/icons/LOGO_COMPLET_BLEU.svg"
          alt="Supra Studio"
        />
        <h1 className="hero-title">
          Architecte d&rsquo;intérieur Paris
          <br />
          Paysagiste Paris
        </h1>
        <div className="hero-foot">
          <p className="hero-sub">
            Architecte d&rsquo;intérieur Paris, paysagiste Paris — rénovation
            d&rsquo;appartements, maisons neuves et aménagements extérieurs
            haut de gamme.
          </p>
          <a href="/studio" className="btn btn-light">
            Découvrir le studio
          </a>
        </div>
      </div>
    </section>
  );
}

