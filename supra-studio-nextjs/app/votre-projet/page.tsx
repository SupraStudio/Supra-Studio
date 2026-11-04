import type { Metadata } from "next";
import "./landing.css";
import LeadForm from "@/components/landing/LeadForm";
import PhoneLink from "@/components/landing/PhoneLink";
import { CALLBACK_PROMISE, PHONE_DISPLAY } from "@/lib/landing";

// Landing page Google Ads : hors référencement naturel, hors sitemap, sans menu.
export const metadata: Metadata = {
  title: "Architecte d'intérieur à Paris | Supra Studio",
  description:
    "Architecte d'intérieur à Paris et proche banlieue : rénovation complète d'appartements, de maisons et de locaux professionnels, de la conception au suivi de chantier.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
};

const PROJECTS = [
  {
    img: "/assets/images/maison-kleber-bordeaux-salon-escalier.jpg",
    alt: "Perspective du séjour de la Maison Kléber, organisé autour d'un escalier longitudinal",
    name: "Maison Kléber",
    place: "Bordeaux",
    text: "Transformation d'un ancien garage en maison familiale de 120 m², organisée autour d'un grand escalier qui distribue la lumière sur trois niveaux.",
  },
  {
    img: "/assets/images/brasserie-paris-bar-comptoir.jpg",
    alt: "Perspective du bar et du comptoir d'une brasserie des années 1970",
    name: "Brasserie",
    place: "Paris, Rive Gauche",
    text: "Réhabilitation d'une brasserie des années 1970 de 205 m² : plafonds sculptés, miroirs fumés et carreaux d'origine préservés et remis en valeur.",
  },
  {
    img: "/assets/images/casa-duy-rome-renovation-appartement-salon.jpg",
    alt: "Perspective du séjour de Casa Duy, ouvert autour d'une bibliothèque sur mesure",
    name: "Casa Duy",
    place: "Rome",
    text: "Rénovation complète d'un appartement de 81 m² : espaces de vie décloisonnés, bibliothèque sur mesure, bois et tons crème.",
  },
];

const REVIEWS = [
  {
    author: "Henri",
    context: "Maison Kléber, Bordeaux",
    quote:
      "Le projet n'était pas simple avec une parcelle étroite, mais ils ont su imaginer une maison dans laquelle nous nous projetons pleinement. Nous avons beaucoup apprécié leur capacité à créer de l'espace et de la lumière en jouant avec la verticalité, tout en restant attentifs à nos besoins et à notre façon de vivre.",
  },
  {
    author: "Pierre",
    context: "Avis Google",
    quote:
      "Paul et Béatrice se distinguent par leur créativité, leur rigueur et leur grande attention aux détails. Leur approche mêle avec justesse esthétique, fonctionnalité et qualité des espaces, avec une vraie sensibilité pour les aménagements extérieurs. Une équipe professionnelle, à l'écoute et passionnée, que je recommande vivement.",
  },
  {
    author: "Maria",
    context: "Avis Google",
    quote:
      "Un studio d'architecture très sérieux. Ils allient une grande sensibilité esthétique à un vrai soin du détail et des matériaux. Leur approche permet de trouver des solutions innovantes, fonctionnelles et jamais banales. Je les recommande vivement !",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Visite et faisabilité",
    text: "Un premier échange au téléphone, puis une visite sur place offerte et sans engagement. Si le projet le justifie, nous vous proposons une étude de faisabilité : contraintes, possibilités et enveloppe de travaux.",
  },
  {
    n: "02",
    title: "Conception et démarches",
    text: "Plans, perspectives 3D, choix des matériaux et du mobilier sur mesure. Nous préparons les autorisations (copropriété, mairie) et consultons les entreprises pour comparer des devis précis.",
  },
  {
    n: "03",
    title: "Suivi de chantier",
    text: "Nous coordonnons les artisans, suivons le planning et le budget, et contrôlons la qualité jusqu'à la réception des travaux.",
  },
];

const AREAS = [
  "Paris",
  "Neuilly-sur-Seine",
  "Boulogne-Billancourt",
  "Levallois-Perret",
  "Puteaux",
  "Vincennes",
  "Saint-Mandé",
];

export default function VotreProjetPage() {
  return (
    <div className="lp">
      <main>
        {/* ---------- Hero plein écran : même photo que la page d'accueil ---------- */}
        <section className="lp-hero">
          <div className="lp-hero-media">
            <img
              src="/assets/images/architecte-interieur-paris-salon-renove.jpg"
              alt="Salon d'un appartement parisien rénové"
              fetchPriority="high"
            />
          </div>

          <header className="lp-header">
            <img
              className="lp-logo"
              src="/assets/icons/logo-supra-studio-bleu.svg"
              alt="Supra Studio"
              width={132}
              height={50}
            />
            <PhoneLink className="lp-header-call" ariaLabel={`Appeler le ${PHONE_DISPLAY}`}>
              <span className="lp-header-call-label">Appeler</span> {PHONE_DISPLAY}
            </PhoneLink>
          </header>

          <div className="lp-hero-inner">
            <div className="lp-hero-text">
              <p className="lp-eyebrow">Architecture intérieure et paysage</p>
              <h1>Architecte d&apos;intérieur à&nbsp;Paris</h1>
              <p className="lp-lead">
                Rénovation complète d&apos;appartements, de maisons et de locaux professionnels, de
                la conception au suivi de chantier. Une seule équipe pour l&apos;intérieur, le
                paysage et le mobilier sur mesure.
              </p>
              <ul className="lp-proofs">
                <li>
                  <strong>5,0 ★</strong> sur Google
                </li>
                <li>Visite sur place offerte</li>
                <li>Rappel {CALLBACK_PROMISE.replace(", du lundi au vendredi", "")}</li>
                <li>Assurés RC pro et décennale</li>
              </ul>
            </div>

            <LeadForm />
          </div>
        </section>

        {/* ---------- Offre de premier contact ---------- */}
        <section className="lp-section lp-offer">
          <div className="lp-wrap lp-offer-inner">
            <div>
              <p className="lp-label">Premier rendez-vous</p>
              <h2>Une visite sur place, offerte et sans engagement</h2>
            </div>
            <div>
              <p>
                Nous venons voir votre bien, écoutons vos envies et vos contraintes, et vous donnons
                un premier avis sur ce qui est possible. Vous repartez avec une idée claire de la
                suite, que vous travailliez ensuite avec nous ou non.
              </p>
              <p className="lp-offer-types">
                Appartements, duplex, maisons de ville, villas, locaux commerciaux, cabinets médicaux
                et paramédicaux.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Projets ---------- */}
        <section className="lp-section">
          <div className="lp-wrap">
            <p className="lp-label">Nos projets en cours</p>
            <h2>Des espaces qui élèvent le quotidien</h2>
            <p className="lp-section-intro">
              Perspectives de conception de projets actuellement à l&apos;étude.
            </p>
            <div className="lp-projects">
              {PROJECTS.map((p) => (
                <article className="lp-project" key={p.name}>
                  <div className="lp-project-img">
                    <img src={p.img} alt={p.alt} loading="lazy" />
                  </div>
                  <h3>
                    {p.name} <span>· {p.place}</span>
                  </h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Pourquoi Supra Studio ---------- */}
        <section className="lp-section lp-duo">
          <div className="lp-wrap lp-duo-inner">
            <div className="lp-duo-img">
              <img
                src="/assets/images/paul-beatrice-fondateurs-supra-studio.jpg"
                alt="Paul Cohen et Beatrice Congiu, fondateurs de Supra Studio"
                loading="lazy"
              />
            </div>
            <div>
              <p className="lp-label">Le studio</p>
              <h2>Un seul interlocuteur, une vision d&apos;ensemble</h2>
              <p>
                La plupart des projets obligent à coordonner un architecte, un décorateur, un
                paysagiste et un menuisier, dont les visions ne s&apos;accordent pas toujours. Chez
                Supra Studio, l&apos;architecture, l&apos;intérieur, le paysage et le mobilier sur
                mesure sont pensés ensemble, par la même équipe.
              </p>
              <ul className="lp-duo-list">
                <li>
                  <strong>Paul Cohen</strong>, architecte d&apos;intérieur et paysagiste concepteur
                  diplômé de l&apos;École nationale supérieure d&apos;architecture et de paysage de
                  Bordeaux.
                </li>
                <li>
                  <strong>Beatrice Congiu</strong>, diplômée en architecture de La Sapienza à Rome,
                  titulaire de l&apos;habilitation à la maîtrise d&apos;œuvre (HMONP, Paris).
                </li>
                <li>
                  Assurés auprès de la MAF (EUROMAF) en responsabilité civile professionnelle et
                  décennale.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Méthode ---------- */}
        <section className="lp-section">
          <div className="lp-wrap">
            <p className="lp-label">Notre méthode</p>
            <h2>Trois étapes, un projet maîtrisé</h2>
            <ol className="lp-steps">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="lp-step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Avis ---------- */}
        <section className="lp-section lp-reviews">
          <div className="lp-wrap">
            <p className="lp-label">Avis clients</p>
            <h2>
              5,0 ★ sur Google
            </h2>
            <div className="lp-reviews-grid">
              {REVIEWS.map((r) => (
                <figure className="lp-review" key={r.author}>
                  <p className="lp-stars" aria-label="5 étoiles sur 5">
                    ★★★★★
                  </p>
                  <blockquote>« {r.quote} »</blockquote>
                  <figcaption>
                    <strong>{r.author}</strong> · {r.context}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Zone + appel final ---------- */}
        <section className="lp-section lp-final">
          <div className="lp-wrap lp-final-inner">
            <p className="lp-label">Zone d&apos;intervention</p>
            <h2>Parlons de votre projet</h2>
            <p className="lp-areas">{AREAS.join(" · ")}</p>
            <div className="lp-final-actions">
              <a href="#formulaire" className="lp-btn lp-btn-solid">
                Décrire mon projet
              </a>
              <PhoneLink className="lp-btn lp-btn-ghost">Appeler le {PHONE_DISPLAY}</PhoneLink>
            </div>
            <p className="lp-final-note">Rappel {CALLBACK_PROMISE}.</p>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <p>© {new Date().getFullYear()} Supra Studio · SARL · 14 rue des Fonds Verts, 75012 Paris</p>
        <p>
          <a href="/mentions-legales">Mentions légales</a> ·{" "}
          <a href="/politique-confidentialite">Politique de confidentialité</a>
        </p>
      </footer>

      {/* Barre d'appel fixe, sur mobile uniquement */}
      <div className="lp-sticky">
        <PhoneLink className="lp-sticky-call">Appeler</PhoneLink>
        <a href="#formulaire" className="lp-sticky-form">
          Être rappelé
        </a>
      </div>
    </div>
  );
}
