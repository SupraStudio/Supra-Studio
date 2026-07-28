const STEPS = [
  {
    num: "01",
    title: "Visite conseil",
    tag: "Un premier regard sur votre projet",
    body: "La visite conseil est la première étape de notre collaboration. Sur place, nous analysons votre espace — intérieur, extérieur ou les deux — pour comprendre vos usages, vos contraintes et vos envies. Cette rencontre nous permet de vous conseiller au mieux avant tout engagement.",
  },
  {
    num: "02",
    title: "Faisabilité",
    tag: "Évaluer le potentiel réel du projet",
    body: "Nous étudions la faisabilité technique, réglementaire et budgétaire de votre projet : contraintes du bâti, règles d'urbanisme, possibilités d'aménagement intérieur ou d'intervention paysagère, avant d'entrer dans la conception détaillée.",
  },
  {
    num: "03",
    title: "Conception",
    tag: "Donner forme au projet",
    body: "Nous développons les plans, les volumes, les matériaux et les ambiances de votre projet. Grâce à nos compétences en architecture d'intérieur et en architecture paysagère, nous concevons des espaces cohérents où intérieur et extérieur dialoguent.",
  },
  {
    num: "04",
    title: "Suivi de travaux",
    tag: "Un accompagnement jusqu'à la réalisation",
    body: "Nous assurons le suivi de chantier auprès des entreprises et artisans, pour garantir la fidélité du projet réalisé à la conception imaginée — jusqu'à la livraison d'un lieu réellement vécu.",
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
              <span className="service-num">{s.num}</span>
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
