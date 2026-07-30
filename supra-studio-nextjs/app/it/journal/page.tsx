import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import { dict, getDict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.journal, alternates: hreflangAlternates("/journal") };

export default function JournalPage() {
  const lang = "it" as const;
  const t = getDict(lang);

  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang={lang} />
      <main>
        <section className="page-hero page-hero-journal">
          <div className="wrap reveal">
            <div className="section-label">
              <span>{t.journalPage.label}</span>
            </div>
            <h1 className="section-title">{t.journalPage.h1Title}</h1>
            <p>{t.journalPage.desc}</p>
          </div>
        </section>

        <Journal lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
