const PROJECTS = [
  {
    img: "/assets/images/projet-01-exterieur.jpg",
    cat: "Paysage",
    name: "Giardino De Ninno",
    location: "Sabaudia, Latina, Italia",
  },
  {
    img: "/assets/images/projet-02-chambre.jpg",
    cat: "Architecture & architecture d'intérieur",
    name: "Maison Kléber",
    location: "Bordeaux, Gironde, France",
  },
  {
    img: "/assets/images/projet-04-casaduy.jpg",
    cat: "Architecture d'intérieur",
    name: "Casa Duy",
    location: "Rome, Lazio, Italia",
  },
  {
    img: "/assets/images/projet-03-cuisine.jpg",
    cat: "Aménagement · Cuisine",
    name: "Appartement particulier",
    location: "Paris, France",
  },
  {
    img: "/assets/images/projet-05-foretlandes.jpg",
    cat: "Architecture, architecture d'intérieur & paysage",
    name: "Une Maison dans le Paysage",
    location: "Le Porge, Gironde, France",
    wip: true,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projets">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-label">
              <span>Réalisations</span>
            </div>
            <h2 className="section-title">Nos projets</h2>
          </div>
          <a href="/projets" className="link-arrow">
            Voir tous les projets ↗
          </a>
        </div>

        <div className="projects-stack reveal">
          {PROJECTS.map((p, i) => (
            <a className="project-card" href="/projets" key={i}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="overlay" />
              {p.wip && <span className="wip-badge">Work in progress</span>}
              <div className="info">
                <p className="cat">{p.cat}</p>
                <p className="name">{p.name}</p>
                <p className="location">{p.location}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


