import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StudioHero from "@/components/StudioHero";
import Vision from "@/components/Vision";
import Studio from "@/components/Studio";
import SplitTwo from "@/components/SplitTwo";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.studio, alternates: hreflangAlternates("/studio") };

export default function StudioPage() {
  return (
    <>
      <ScrollReveal />
      <Header lang="en" />
      <main>
        <StudioHero lang="en" />
        <Vision lang="en" />
        <Studio full lang="en" />
        <SplitTwo lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
