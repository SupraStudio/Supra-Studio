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

export const metadata: Metadata = { ...dict.it.meta.home, alternates: hreflangAlternates("/") };

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header lang="it" />
      <main>
        <Hero lang="it" />
        <Intro lang="it" />
        <Stats lang="it" />
        <Expertise lang="it" />
        <Projects lang="it" />
        <Studio lang="it" />
        <SplitTwo lang="it" compact />
        <Services lang="it" />
        <Contact lang="it" />
      </main>
      <Footer lang="it" />
    </>
  );
}
