import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StudioHero from "@/components/StudioHero";
import Vision from "@/components/Vision";
import Studio from "@/components/Studio";
import SplitTwo from "@/components/SplitTwo";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates, getDict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.studio, alternates: hreflangAlternates("/studio") };

export default function StudioPage() {
  const t = getDict("en");
  return (
    <>
      <ScrollReveal />
      <Header lang="en" />
      <main>
        <StudioHero lang="en" />
        <Vision lang="en" />
        <Studio full lang="en" />
        <SplitTwo lang="en" />
        <Reviews lang="en" ids={["louis-guiter", "gui-hun"]} variant="compact" title={t.reviews.studioTitle} />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
