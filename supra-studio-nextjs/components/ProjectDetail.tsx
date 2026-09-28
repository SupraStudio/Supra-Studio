import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { PROJECTS } from "@/lib/projects";
import { localizeProject } from "@/lib/projects.i18n";
import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug && !p.wip);
}

export default function ProjectDetail({ slug, lang }: { slug: string; lang: Lang }) {
  const raw = getProjectBySlug(slug);
  if (!raw) notFound();
  const project = localizeProject(raw, lang);
  const t = getDict(lang);

  const others = PROJECTS.filter((p) => !p.wip && p.slug !== project.slug).map((p) =>
    localizeProject(p, lang)
  );

  return (
    <>
      <ScrollReveal />
      <Header lang={lang} />
      <main>
        <section className="hero project-hero">
          <div className="hero-media">
            <img
              src={project.images[0]}
              alt={project.name}
              fetchPriority="high"
            />
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow">{project.cat}</p>
            <h1 className="hero-title project-hero-title">{project.name}</h1>
            <p className="hero-sub">{project.location}</p>
          </div>
        </section>

        <section className="project-body">
          <div className="wrap">
            <a href={localizedHref("/projets", lang)} className="link-arrow reveal">
              {t.backToProjects}
            </a>

            {project.longSections ? (
              <div className="project-rows reveal">
                <div className="project-combined">
                  <div className="project-combined-media">
                    {[project.img, ...(project.gallery || [])].map((src, i) => (
                      <div className="project-combined-image" key={`img-${i}`}>
                        <img src={src} alt={project.name} loading="lazy" />
                      </div>
                    ))}
                    {project.plans?.map((plan, i) => (
                      <figure className="project-combined-image" key={`plan-${i}`}>
                        <img src={plan.src} alt={plan.caption} loading="lazy" />
                        <figcaption>{plan.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="project-combined-text">
                    {project.longSections.map((section, i) => (
                      <div className="project-combined-section" key={i}>
                        <h2>{section.heading}</h2>
                        {section.paragraphs.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {(project.locationImage || project.identityTable) && (
                  <div className="project-row">
                    {project.locationImage && (
                      <div className="project-row-image">
                        <img
                          src={project.locationImage}
                          alt={`${project.location}`}
                          loading="lazy"
                        />
                      </div>
                    )}
                    {project.identityTable && (
                      <div className="project-row-text">
                        <h2>{t.identityCard}</h2>
                        <dl className="project-identity-inline">
                          {project.identityTable.map((row, i) => (
                            <div className="project-identity-row" key={i}>
                              <dt>{row.label}</dt>
                              <dd>{row.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <>
                {project.description && (
                  <div className="project-text reveal">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {project.images.length > 1 && (
                  <div className="project-gallery reveal">
                    {project.images.slice(1).map((img, i) => (
                      <div className="project-gallery-item" key={i}>
                        <img src={img} alt={`${project.name} ${i + 2}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}

                {project.gallery && (
                  <div className="project-gallery reveal">
                    {project.gallery.map((img, i) => (
                      <div className="project-gallery-item" key={i}>
                        <img src={img} alt={project.name} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}

                {project.plans && (
                  <div className="project-plans reveal">
                    <div className="section-label">
                      <span>{t.plansLabel}</span>
                    </div>
                    <div className="project-plans-grid">
                      {project.plans.map((plan, i) => (
                        <figure key={i}>
                          <img src={plan.src} alt={plan.caption} loading="lazy" />
                          <figcaption>{plan.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {project.locationImage && (
                  <div className="project-location reveal">
                    <img
                      src={project.locationImage}
                      alt={project.location}
                      loading="lazy"
                    />
                  </div>
                )}

                {project.identityTable && (
                  <div className="project-identity reveal">
                    <div className="section-label">
                      <span>{t.identityCard}</span>
                    </div>
                    <dl>
                      {project.identityTable.map((row, i) => (
                        <div className="project-identity-row" key={i}>
                          <dt>{row.label}</dt>
                          <dd>{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </>
            )}

            {project.keywords && (
              <div className="project-keywords reveal">
                {project.keywords.map((k, i) => (
                  <span key={i}>{k}</span>
                ))}
              </div>
            )}
          </div>
        </section>

        {others.length > 0 && (
          <section className="project-others">
            <div className="wrap">
              <div className="section-label reveal">
                <span>{t.discoverAlso}</span>
              </div>
              <div className="projects-stack reveal">
                {others.slice(0, 2).map((p) => (
                  <a
                    className="project-teaser"
                    href={localizedHref(`/projets/${p.slug}`, lang)}
                    key={p.slug}
                  >
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <div className="overlay" />
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
        )}

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
