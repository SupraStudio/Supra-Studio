import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.filter((p) => !p.wip).map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug && !p.wip);
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Supra Studio`,
    description: `${project.cat} — ${project.name}, ${project.location}. Un projet Supra Studio, atelier d'architecture d'intérieur et de paysage.`,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const others = PROJECTS.filter((p) => !p.wip && p.slug !== project.slug);

  return (
    <>
      <ScrollReveal />
      <Header />
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
            <a href="/projets" className="link-arrow reveal">
              ← Tous les projets
            </a>

            {project.longSections ? (
              <div className="project-showcase reveal">
                {project.longSections.map((section, i) => {
                  const img = project.gallery?.[i];
                  return (
                    <div className="project-showcase-block" key={i}>
                      <div className="project-caption">
                        <h2>{section.heading}</h2>
                        {section.paragraphs.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                      {img && (
                        <div className="project-full-image">
                          <img src={img} alt={project.name} loading="lazy" />
                        </div>
                      )}
                    </div>
                  );
                })}
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
                        <img src={img} alt={`${project.name} — vue ${i + 2}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}

                {project.gallery && (
                  <div className="project-gallery reveal">
                    {project.gallery.map((img, i) => (
                      <div className="project-gallery-item" key={i}>
                        <img src={img} alt={`${project.name} — vue`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {project.plans && (
              <div className="project-plans reveal">
                <div className="section-label">
                  <span>Plans</span>
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
                <img src={project.locationImage} alt={`Localisation — ${project.location}`} loading="lazy" />
              </div>
            )}

            {project.identityTable && (
              <div className="project-identity reveal">
                <div className="section-label">
                  <span>Fiche d&rsquo;identité</span>
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
                <span>À découvrir aussi</span>
              </div>
              <div className="projects-stack reveal">
                {others.slice(0, 2).map((p) => (
                  <a className="project-teaser" href={`/projets/${p.slug}`} key={p.slug}>
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

        <Contact />
      </main>
      <Footer />
    </>
  );
}
