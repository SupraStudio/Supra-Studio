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
  const [thumbA, thumbB] = PROJECTS;

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
            <div className="page-hero-collage">
              <div className="page-hero-thumb">
                <img src={thumbA.img} alt={thumbA.name} />
              </div>
              <div className="page-hero-thumb secondary">
                <img src={thumbB.img} alt={thumbB.name} />
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
