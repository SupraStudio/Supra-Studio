import { PROJECTS } from "@/lib/projects";

export default function Projects({ full = false }: { full?: boolean }) {
  if (!full) {
    // Homepage teaser — previous style: single full-bleed image with
    // category/name/location overlaid directly on the photo.
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
              <a
                className={`project-teaser${p.wip ? " is-wip" : ""}`}
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

  // Full Projets page — identity-card style: contained image (with
  // category/name/location overlaid on it) + a metadata panel alongside.
  return (
    <section className="projects" id="projets">
      <div className="wrap">
        <div className="projects-stack reveal">
          {PROJECTS.map((p, i) => (
            <a
              className={`project-card${p.wip ? " is-wip" : ""}`}
              href={p.wip ? undefined : `/projets/${p.slug}`}
              key={i}
            >
              <div className="project-card-media">
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="overlay" />
                {p.wip && <span className="wip-badge">Work in progress</span>}
                <div className="info">
                  <p className="cat">{p.cat}</p>
                  <p className="name">{p.name}</p>
                  <p className="location">{p.location}</p>
                </div>
              </div>
              <div className="project-card-info">
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
