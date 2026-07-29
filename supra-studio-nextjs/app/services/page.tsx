import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import MethodTimeline from "@/components/MethodTimeline";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.fr.meta.services, alternates: hreflangAlternates("/services") };

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="fr" />
      <main className="page-main-offset">
        <Services hideCta lang="fr" />
        <MethodTimeline lang="fr" />
        <Contact lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
}
