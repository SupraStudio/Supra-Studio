const STEPS = [
  {
    num: "01",
    title: "Visite conseil",
    tag: "Un premier regard sur votre projet",
    body: "La visite conseil est la première étape de notre collaboration. Sur place, nous analysons votre espace — intérieur, extérieur ou les deux — pour comprendre vos usages, vos contraintes et vos envies. Cette rencontre nous permet de vous conseiller au mieux avant tout engagement.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 20c3.5-7 10-11 16-11s12.5 4 16 11c-3.5 7-10 11-16 11s-12.5-4-16-11Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Faisabilité",
    tag: "Évaluer le potentiel réel du projet",
    body: "Nous étudions la faisabilité technique, réglementaire et budgétaire de votre projet : contraintes du bâti, règles d'urbanisme, possibilités d'aménagement intérieur ou d'intervention paysagère, avant d'entrer dans la conception détaillée.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Conception",
    tag: "Donner forme au projet",
    body: "Nous développons les plans, les volumes, les matériaux et les ambiances de votre projet. Grâce à nos compétences en architecture d'intérieur et en architecture paysagère, nous concevons des espaces cohérents où intérieur et extérieur dialoguent.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 32 28 12" stroke="currentColor" strokeWidth="1.6" />
        <path d="M22 10l8 8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 34l4-8 4 4-8 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Suivi de travaux",
    tag: "Un accompagnement jusqu'à la réalisation",
    body: "Nous assurons le suivi de chantier auprès des entreprises et artisans, pour garantir la fidélité du projet réalisé à la conception imaginée — jusqu'à la livraison d'un lieu réellement vécu.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M8 22c0-6.6 5.4-12 12-12s12 5.4 12 12"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect x="6" y="22" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <rect x="28" y="22" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Services({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-label reveal">
          <span>Nos services</span>
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: 24 }}>
          Un accompagnement complet, de l&rsquo;idée à la réalisation
        </h2>
        <p className="services-intro reveal">
          Supra Studio réunit des compétences en architecture d&rsquo;intérieur
          et en architecture paysagère, enrichies par une formation et une
          expérience en conception architecturale. Quatre missions
          complémentaires, mobilisables ensemble ou séparément selon les
          besoins de votre projet.
        </p>

        <div className="services-grid reveal">
          {STEPS.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-card-top">
                <span className="service-icon">{s.icon}</span>
                <span className="service-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="tag">{s.tag}</p>
              <p className="service-card-body">{s.body}</p>
            </div>
          ))}
        </div>

        {!hideCta && (
          <div className="services-cta reveal">
            <p>De la conception à la livraison, un projet clé en main.</p>
            <a
              href="https://calendly.com/suprastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Prendre rendez-vous
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
