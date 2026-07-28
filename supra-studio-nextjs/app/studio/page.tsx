import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Vision from "@/components/Vision";
import Studio from "@/components/Studio";
import SplitTwo from "@/components/SplitTwo";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Le Studio — Supra Studio | Architecte d'intérieur & Paysagiste Paris",
  description:
    "Supra Studio, atelier d'architecture d'intérieur et de paysage fondé par un duo franco-italien, entre Paris, Bordeaux et Rome. Découvrez notre vision, notre équipe et nos valeurs.",
};

export default function StudioPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} />
      <main>
        <Vision />
        <Studio full />
        <SplitTwo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
