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
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.home };

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header lang="en" />
      <main>
        <Hero lang="en" />
        <Intro lang="en" />
        <Stats lang="en" />
        <Expertise lang="en" />
        <Projects lang="en" />
        <Studio lang="en" />
        <SplitTwo lang="en" />
        <Services lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
