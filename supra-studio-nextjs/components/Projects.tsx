const PROJECTS = [
  {
    img: "/assets/images/projet-01-exterieur.jpg",
    cat: "Paysage · Extérieur",
    name: "Jardin & piscine, Rome",
  },
  {
    img: "/assets/images/projet-02-salon.jpg",
    cat: "Architecture d'intérieur",
    name: "Appartement, Paris",
  },
  {
    img: "/assets/images/projet-03-salon.jpg",
    cat: "Rénovation · Salon",
    name: "Appartement particulier",
  },
  {
    img: "/assets/images/projet-03-cuisine.jpg",
    cat: "Aménagement · Cuisine",
    name: "Appartement particulier",
  },
  {
    img: "/assets/images/projet-02-chambre.jpg",
    cat: "Rénovation · Chambre",
    name: "Appartement, Paris",
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
              <div className="info">
                <p className="cat">{p.cat}</p>
                <p className="name">{p.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

