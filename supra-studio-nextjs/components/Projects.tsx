import { PROJECTS } from "@/lib/projects";

export default function Projects({ full = false }: { full?: boolean }) {
  return (
    <section className="projects" id="projets">
      <div className="wrap">
        {!full && (
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
        )}

        <div className="projects-stack reveal">
          {PROJECTS.map((p, i) => (
            <a
              className={`project-card${p.wip ? " is-wip" : ""}`}
              href={p.wip ? undefined : `/projets/${p.slug}`}
              key={i}
            >
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
