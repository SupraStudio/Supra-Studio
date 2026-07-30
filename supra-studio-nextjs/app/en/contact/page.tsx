import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.contact, alternates: hreflangAlternates("/contact") };

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="en" />
      <main className="contact-page-main page-main-offset">
        <Contact asH1 lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
