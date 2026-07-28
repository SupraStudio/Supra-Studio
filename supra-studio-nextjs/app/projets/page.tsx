import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Nos Projets — Supra Studio | Architecture d'intérieur & Paysage",
  description:
    "Appartements rénovés, maisons neuves, jardins et restaurants : découvrez les réalisations de Supra Studio à Paris, Bordeaux et Rome.",
};

export default function ProjetsPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} />
      <main>
        <section className="page-hero">
          <div className="wrap reveal">
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
        </section>
        <Projects full />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
