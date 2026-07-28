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
              <div className="project-card-media">
                <img src={p.img} alt={p.name} loading="lazy" />
                {p.wip && <span className="wip-badge">Work in progress</span>}
              </div>
              <div className="project-card-info">
                <p className="cat">{p.cat}</p>
                <h3 className="name">{p.name}</h3>
                <p className="location">{p.location}</p>
                {(p.type || p.programme || p.surface || p.annee) && (
                  <dl className="project-meta">
                    {p.type && (
                      <>
                        <dt>Type de projet</dt>
                        <dd>{p.type}</dd>
                      </>
                    )}
                    {p.programme && (
                      <>
                        <dt>Programme</dt>
                        <dd>{p.programme}</dd>
                      </>
                    )}
                    {p.surface && (
                      <>
                        <dt>Surface</dt>
                        <dd>{p.surface}</dd>
                      </>
                    )}
                    {p.annee && (
                      <>
                        <dt>Année</dt>
                        <dd>{p.annee}</dd>
                      </>
                    )}
                  </dl>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
