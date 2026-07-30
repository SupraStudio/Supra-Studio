import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import MethodTimeline from "@/components/MethodTimeline";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates, getDict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.fr.meta.services, alternates: hreflangAlternates("/services") };

export default function ServicesPage() {
  const t = getDict("fr");
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="fr" />
      <main className="page-main-offset">
        <Services hideCta asH1 lang="fr" />
        <MethodTimeline lang="fr" />
        <Reviews lang="fr" ids={["henri", "brian-duy-nguyen"]} variant="compact" title={t.reviews.servicesTitle} />
        <Contact lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
}
