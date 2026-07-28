import { getDict, type Lang } from "@/lib/i18n";

export default function Services({ hideCta = false, lang = "fr" }: { hideCta?: boolean; lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-label reveal">
          <span>{t.servicesPage.label}</span>
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: 24 }}>
          {t.servicesPage.title}
        </h2>
        <p className="services-intro reveal">{t.servicesPage.intro}</p>

        <div className="services-grid reveal">
          {t.servicesPage.steps.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p className="tag">{s.tag}</p>
              <p className="service-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {!hideCta && (
        <div className="services-cta-bleed reveal">
          <div className="services-cta">
            <p>{t.ctaLine}</p>
            <a
              href="https://calendly.com/suprastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              {t.bookAppointment}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
