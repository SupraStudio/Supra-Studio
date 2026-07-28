import { PROJECTS } from "@/lib/projects";
import { localizeProject } from "@/lib/projects.i18n";
import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Projects({ full = false, lang = "fr" }: { full?: boolean; lang?: Lang }) {
  const t = getDict(lang);
  const projects = PROJECTS.map((p) => localizeProject(p, lang));

  if (!full) {
    // Homepage teaser — previous style: single full-bleed image with
    // category/name/location overlaid directly on the photo.
    return (
      <section className="projects" id="projets">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="section-label">
                <span>{t.projectsPage.label}</span>
              </div>
              <h2 className="section-title">{t.projectsPage.title}</h2>
            </div>
            <a href={localizedHref("/projets", lang)} className="link-arrow">
              {t.seeAllProjects}
            </a>
          </div>

          <div className="projects-stack reveal">
            {projects.map((p, i) => (
              <a
                className={`project-teaser${p.wip ? " is-wip" : ""}`}
                href={p.wip ? undefined : localizedHref(`/projets/${p.slug}`, lang)}
                key={i}
              >
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="overlay" />
                {p.wip && <span className="wip-badge">{t.workInProgress}</span>}
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
          {projects.map((p, i) => (
            <a
              className={`project-card${p.wip ? " is-wip" : ""}`}
              href={p.wip ? undefined : localizedHref(`/projets/${p.slug}`, lang)}
              key={i}
            >
              <div className="project-card-media">
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="overlay" />
                {p.wip && <span className="wip-badge">{t.workInProgress}</span>}
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
                        <dt>{t.projectsPage.typeLabel}</dt>
                        <dd>{p.type}</dd>
                      </>
                    )}
                    {p.programme && (
                      <>
                        <dt>{t.projectsPage.programmeLabel}</dt>
                        <dd>{p.programme}</dd>
                      </>
                    )}
                    {p.surface && (
                      <>
                        <dt>{t.projectsPage.surfaceLabel}</dt>
                        <dd>{p.surface}</dd>
                      </>
                    )}
                    {p.annee && (
                      <>
                        <dt>{t.projectsPage.yearLabel}</dt>
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
