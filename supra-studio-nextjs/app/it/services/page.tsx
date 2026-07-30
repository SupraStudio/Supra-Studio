import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import MethodTimeline from "@/components/MethodTimeline";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates, getDict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.services, alternates: hreflangAlternates("/services") };

export default function ServicesPage() {
  const t = getDict("it");
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="it" />
      <main className="page-main-offset">
        <Services hideCta asH1 lang="it" />
        <MethodTimeline lang="it" />
        <Reviews lang="it" ids={["demo-5", "demo-2"]} variant="compact" title={t.reviews.servicesTitle} />
        <Contact lang="it" />
      </main>
      <Footer lang="it" />
    </>
  );
}
