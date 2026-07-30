import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";
import Contact from "@/components/Contact";
import { getLocalizedFaqItems } from "@/lib/faq.i18n";
import { dict, getDict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.fr.meta.faq, alternates: hreflangAlternates("/faq") };

export default function FaqPage() {
  const lang = "fr" as const;
  const t = getDict(lang);
  const items = getLocalizedFaqItems(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header hasHero={false} lang={lang} />
      <main className="page-main-offset">
        <section className="page-hero page-hero-faq">
          <div className="wrap reveal">
            <div className="section-label">
              <span>{t.faqPage.label}</span>
            </div>
            <h1 className="section-title">{t.faqPage.h1Title}</h1>
            <p>{t.faqPage.desc}</p>
          </div>
        </section>

        <section className="faq-section">
          <div className="wrap">
            <FAQAccordion items={items} />
          </div>
        </section>

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
