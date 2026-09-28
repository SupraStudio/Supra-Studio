import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.contact, alternates: hreflangAlternates("/contact", "it") };

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="it" />
      <main className="contact-page-main page-main-offset">
        <Contact asH1 lang="it" />
      </main>
      <Footer lang="it" />
    </>
  );
}
