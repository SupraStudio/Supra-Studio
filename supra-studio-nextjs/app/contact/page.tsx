import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.fr.meta.contact, alternates: hreflangAlternates("/contact") };

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="fr" />
      <main className="contact-page-main page-main-offset">
        <Contact lang="fr" />
      </main>
      <Footer lang="fr" />
    </>
  );
}
