import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import InterventionAreas from "@/components/InterventionAreas";
import MethodTimeline from "@/components/MethodTimeline";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates, getDict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.services, alternates: hreflangAlternates("/services", "en") };

export default function ServicesPage() {
  const t = getDict("en");
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="en" />
      <main className="page-main-offset">
        <Services hideCta asH1 lang="en" />
        <InterventionAreas lang="en" />
        <MethodTimeline lang="en" />
        <Reviews lang="en" ids={["henri", "brian-duy-nguyen"]} variant="compact" title={t.reviews.servicesTitle} />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
