import { getDict, type Lang } from "@/lib/i18n";

export default function MethodTimeline({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="method">
      <div className="wrap">
        <div className="section-label reveal">
          <span>{t.servicesPage.methodLabel}</span>
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: 40 }}>
          {t.servicesPage.methodTitle}
        </h2>

        <div className="method-list reveal">
          {t.servicesPage.methodSteps.map((s) => (
            <div className="method-item" key={s.num}>
              <div className="method-num">{s.num}</div>
              <div className="method-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta reveal">
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
    </section>
  );
}
