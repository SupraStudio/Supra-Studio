import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import MethodTimeline from "@/components/MethodTimeline";

export const metadata: Metadata = {
  title: "Nos Services — Supra Studio | Architecture d'intérieur & Paysage",
  description:
    "Visite conseil, faisabilité, conception, suivi de travaux : découvrez notre méthode d'accompagnement complète, de la première rencontre à la livraison de votre projet.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main style={{ paddingTop: "calc(var(--section-pad) + 40px)" }}>
        <Services hideCta />
        <MethodTimeline />
      </main>
      <Footer />
    </>
  );
}
