import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Studio from "@/components/Studio";
import SplitTwo from "@/components/SplitTwo";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.fr.meta.home, alternates: hreflangAlternates("/") };

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header lang="fr" />
      <main>
        <Hero lang="fr" />
        <Intro lang="fr" />
        <Stats lang="fr" />
        <Expertise lang="fr" />
        <Projects lang="fr" />
        <Studio lang="fr" />
        <SplitTwo lang="fr" compact />
        <Services lang="fr" />
        <Contact lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
}
