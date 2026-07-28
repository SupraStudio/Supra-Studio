import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Projects from "@/components/Projects";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Contact from "@/components/Contact";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Nos Projets — Supra Studio | Architecture d'intérieur & Paysage",
  description:
    "Appartements rénovés, maisons neuves, jardins et restaurants : découvrez les réalisations de Supra Studio à Paris, Bordeaux et Rome.",
};

export default function ProjetsPage() {
  const total = PROJECTS.length;
  const countries = new Set(
    PROJECTS.map((p) => p.location.split(",").pop()?.trim())
  ).size;

  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} />
      <main>
        <section className="page-hero page-hero-projets">
          <div className="wrap page-hero-grid reveal">
            <div>
              <div className="section-label">
                <span>Réalisations</span>
              </div>
              <h1 className="section-title">Nos projets</h1>
              <p>
                Appartements rénovés, maisons neuves, jardins et commerces —
                chaque projet traduit une même recherche de justesse entre
                matière, lumière et usage, entre Paris, Bordeaux et Rome.
              </p>
            </div>
            <div className="page-hero-stats">
              <div className="stat">
                <p className="stat-figure">0{total}</p>
                <p className="stat-label">Projets présentés</p>
              </div>
              <div className="stat">
                <p className="stat-figure">0{countries}</p>
                <p className="stat-label">Pays représentés</p>
              </div>
              <div className="stat">
                <p className="stat-figure">Paris · Bordeaux · Rome</p>
                <p className="stat-label">Nos terrains d&rsquo;intervention</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectsMarquee />

        <Projects full />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
