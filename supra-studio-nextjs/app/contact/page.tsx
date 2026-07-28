import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Supra Studio | Architecte d'intérieur & Paysagiste Paris",
  description:
    "Contactez Supra Studio pour votre projet d'architecture d'intérieur ou de paysage à Paris. 14 rue des Fonds Verts, 75012 Paris — contact@suprastudio.fr.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} />
      <main style={{ paddingTop: "calc(var(--section-pad) + 40px)" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
