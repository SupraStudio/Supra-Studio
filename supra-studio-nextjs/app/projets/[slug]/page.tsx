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
                  <a className="project-card" href={`/projets/${p.slug}`} key={p.slug}>
                    <div className="project-card-media">
                      <img src={p.img} alt={p.name} loading="lazy" />
                    </div>
                    <div className="project-card-info">
                      <p className="cat">{p.cat}</p>
                      <h3 className="name">{p.name}</h3>
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
