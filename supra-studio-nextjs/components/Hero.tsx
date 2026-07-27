export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="/assets/images/projet-01-exterieur.jpg"
          alt="Jardin méditerranéen et piscine, projet Supra Studio"
          fetchPriority="high"
        />
      </div>

      <span className="scroll-cue">Défiler</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Paris · Bordeaux · Rome</p>
        <h1 className="hero-title">
          Nous sommes un studio d&rsquo;architecture d&rsquo;intérieur et de
          paysage à Paris
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
