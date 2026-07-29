import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Lang } from "@/lib/i18n";
import type { LegalDoc } from "@/lib/legal";

export default function LegalPage({ doc, lang }: { doc: LegalDoc; lang: Lang }) {
  return (
    <>
      <ScrollReveal />
      <Header hasHero={false} lang={lang} />
      <main className="page-main-offset">
        <section className="legal-page">
          <div className="wrap">
            <div className="section-label reveal">
              <span>{doc.label}</span>
            </div>
            <h1 className="section-title legal-title reveal">{doc.title}</h1>
            <p className="legal-updated reveal">{doc.updated}</p>

            {doc.intro && <p className="legal-intro reveal">{doc.intro}</p>}

            <div className="legal-sections reveal">
              {doc.sections.map((section, i) => (
                <div className="legal-section" key={i}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
