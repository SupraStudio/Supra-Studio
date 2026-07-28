import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Contact from "@/components/Contact";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.contact };

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang="en" />
      <main style={{ paddingTop: "calc(var(--section-pad) + 40px)" }}>
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
