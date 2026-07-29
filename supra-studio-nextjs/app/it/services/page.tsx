import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import MethodTimeline from "@/components/MethodTimeline";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.services, alternates: hreflangAlternates("/services") };

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="it" />
      <main className="page-main-offset">
        <Services hideCta lang="it" />
        <MethodTimeline lang="it" />
        <Contact lang="it" />
      </main>
      <Footer lang="it" />
    </>
  );
}
