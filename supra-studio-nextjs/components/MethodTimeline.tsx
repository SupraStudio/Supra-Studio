const STEPS = [
  {
    num: "01",
    title: "La rencontre",
    body: "Ce premier échange se fait sur site, en visioconférence ou par téléphone. Vous nous partagez votre projet, vos usages et vos envies. En retour, nous posons un premier regard sur sa faisabilité — contraintes du bâti, d'urbanisme, budgétaires et environnementales — pour poser des bases claires avant de commencer.",
  },
  {
    num: "02",
    title: "La conception",
    body: "C'est le moment où le projet prend forme : nous traduisons vos attentes en premières intentions spatiales, entre architecture d'intérieur et architecture paysagère selon les besoins. Volumes, circulations, lumière et matières sont pensés ensemble, pour donner une direction juste et cohérente au projet avant d'aller plus loin.",
  },
  {
    num: "03",
    title: "Les démarches administratives",
    body: "Déclaration préalable, dossier d'autorisation de travaux, formalités liées à l'urbanisme : nous préparons et déposons avec vous les documents nécessaires à votre projet. Cette étape demande rigueur et patience, mais elle est indispensable pour sécuriser la suite du chantier. Nous vous accompagnons jusqu'à l'obtention des autorisations.",
  },
  {
    num: "04",
    title: "Le dessin détaillé",
    body: "Pendant l'instruction du dossier, nous approfondissons les plans techniques : électricité, plomberie, chauffage, menuiseries, revêtements. Chaque espace est détaillé avec précision, et des descriptifs sont rédigés pour chaque lot, afin de préparer la consultation des entreprises. Cette phase, minutieuse, conditionne la qualité de tout le chantier à venir.",
  },
  {
    num: "05",
    title: "La sélection des artisans",
    body: "Nous nous appuyons sur un réseau d'artisans et d'entreprises locales, choisis avec la même exigence que celle apportée à chaque projet. Une fois les devis reçus, nous les analysons et vous conseillons sur les entreprises à retenir. Des échanges seront nécessaires pour ajuster les offres au niveau de détail attendu pour votre projet.",
  },
  {
    num: "06",
    title: "Le suivi de chantier",
    body: "Les travaux commencent : notre rôle évolue, de la conception vers le suivi de réalisation. Notre présence régulière sur site s'accompagne de comptes rendus détaillés, pour assurer la coordination des équipes et la fidélité du chantier au projet dessiné. La livraison marque l'aboutissement d'une collaboration attentive — et le début d'un lieu pleinement habité.",
  },
];

export default function MethodTimeline() {
  return (
    <section className="method">
      <div className="wrap">
        <div className="section-label reveal">
          <span>Notre méthode de travail</span>
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: 40 }}>
          De la rencontre à la livraison
        </h2>

        <div className="method-list reveal">
          {STEPS.map((s) => (
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
      </div>
    </section>
  );
}
