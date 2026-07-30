import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Projects from "@/components/Projects";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Contact from "@/components/Contact";
import { PROJECTS } from "@/lib/projects";
import { dict, getDict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.projects, alternates: hreflangAlternates("/projets") };

export default function ProjetsPage() {
  const lang = "en" as const;
  const t = getDict(lang);
  const total = PROJECTS.length;
  const countries = new Set(
    PROJECTS.map((p) => p.location.split(",").pop()?.trim())
  ).size;

  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang={lang} />
      <main>
        <section className="page-hero page-hero-projets">
          <div className="wrap page-hero-grid reveal">
            <div>
              <div className="section-label">
                <span>{t.projectsPage.label}</span>
              </div>
              <h1 className="section-title">{t.projectsPage.h1Title}</h1>
              <p>{t.projectsPage.desc}</p>
            </div>
            <div className="page-hero-stats">
              <div className="stat">
                <p className="stat-figure">0{total}</p>
                <p className="stat-label">{t.projectsPage.presented}</p>
              </div>
              <div className="stat">
                <p className="stat-figure">0{countries}</p>
                <p className="stat-label">{t.projectsPage.countries}</p>
              </div>
              <div className="stat">
                <p className="stat-figure">Paris · Bordeaux · Rome</p>
                <p className="stat-label">{t.projectsPage.territories}</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectsMarquee />

        <Projects full lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
