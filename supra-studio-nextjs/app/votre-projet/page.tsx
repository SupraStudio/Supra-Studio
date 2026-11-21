import type { Metadata } from "next";
import "./landing.css";
import LeadForm from "@/components/landing/LeadForm";
import PhoneLink from "@/components/landing/PhoneLink";
import StickyBar from "@/components/landing/StickyBar";
import { CALLBACK_PROMISE } from "@/lib/landing";

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
    img: "/assets/images/maison-kleber-bordeaux-facade-jour.jpg",
    alt: "Perspective de la façade sur rue de la Maison Kléber, à Bordeaux",
    name: "Maison Kléber",
    place: "Bordeaux",
    text: "Un ancien garage transformé en maison familiale de 120 m².",
  },
  {
    img: "/assets/images/brasserie-paris-bar-comptoir.jpg",
    alt: "Perspective du bar et du comptoir d'une brasserie des années 1970",
    name: "Brasserie",
    place: "Paris, Rive Gauche",
    text: "Réhabilitation d'une brasserie des années 1970 de 205 m².",
  },
  {
    img: "/assets/images/casa-duy-rome-renovation-appartement-salon.jpg",
    alt: "Perspective du séjour de Casa Duy, ouvert autour d'une bibliothèque sur mesure",
    name: "Casa Duy",
    place: "Rome",
    text: "Rénovation complète d'un appartement de 81 m², avec bibliothèque sur mesure.",
  },
];

const REVIEWS = [
  {
    author: "Henri",
    context: "Avis Google",
    quote:
      "Ils ont su imaginer une maison dans laquelle nous nous projetons pleinement.",
  },
  {
    author: "Pierre",
    context: "Avis Google",
    quote:
      "Paul et Béatrice se distinguent par leur créativité, leur rigueur et leur grande attention aux détails.",
  },
  {
    author: "Maria",
    context: "Avis Google",
    quote:
      "Un studio d'architecture très sérieux. Ils allient une grande sensibilité esthétique à un vrai soin du détail et des matériaux.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Visite et faisabilité",
    text: "Un échange téléphonique, puis une visite sur place offerte et sans engagement. Si le projet le justifie, une étude de faisabilité.",
  },
  {
    n: "02",
    title: "Conception et démarches",
    text: "Plans, perspectives 3D, matériaux, mobilier sur mesure. Nous préparons les autorisations et consultons les entreprises.",
  },
  {
    n: "03",
    title: "Suivi de chantier",
    text: "Nous coordonnons les artisans, suivons planning et budget, et contrôlons la qualité jusqu'à la réception.",
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
              src="/assets/icons/logo-supra-studio-architecte-interieur-paysagiste.svg"
              alt="Supra Studio"
            />
            <PhoneLink className="lp-header-call" ariaLabel="Appeler Supra Studio">
              Appeler
            </PhoneLink>
          </header>

          <div className="lp-hero-content">
            <p className="lp-eyebrow">Architecture intérieure et paysage</p>
            <h1>Architecte d&apos;intérieur à&nbsp;Paris</h1>
            <div className="lp-hero-foot">
              <div>
                <p className="lp-lead">
                  Rénovation complète d&apos;appartements, de maisons et de locaux professionnels,
                  de la conception au suivi de chantier.
                </p>
                <ul className="lp-proofs">
                  <li>
                    <strong>5,0 ★</strong> sur Google
                  </li>
                  <li>Visite sur place offerte</li>
                  <li>Rappel {CALLBACK_PROMISE.replace(", du lundi au vendredi", "")}</li>
                </ul>
              </div>
              <a href="#formulaire" className="lp-hero-cta">
                Décrire mon projet
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Bandeau formulaire, sur toute la largeur ---------- */}
        <section className="lp-form-band" id="formulaire">
          <div className="lp-wrap lp-form-band-inner">
            <div className="lp-form-band-text">
              <p className="lp-label">Votre projet</p>
              <h2>Parlons de votre projet</h2>
              <p>
                Quatre questions, puis vos coordonnées. Visite sur place offerte, rappel{" "}
                {CALLBACK_PROMISE}.
              </p>
              <p className="lp-form-band-call">
                Vous préférez appeler ?{" "}
                <PhoneLink className="lp-inline-call">Appelez-nous</PhoneLink>
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* ---------- Projets ---------- */}
        <section className="lp-section" id="realisation">
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
                La plupart des projets obligent à coordonner architecte, décorateur, paysagiste et
                menuisier. Chez Supra Studio, tout est pensé ensemble, par la même équipe.
              </p>
              <ul className="lp-duo-list">
                <li>
                  <strong>Paul Cohen</strong>, architecte d&apos;intérieur et paysagiste concepteur
                  (ENSAP Bordeaux).
                </li>
                <li>
                  <strong>Beatrice Congiu</strong>, architecte diplômée de La Sapienza (Rome),
                  HMONP.
                </li>
                <li>Assurés RC pro et décennale (MAF).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- Méthode ---------- */}
        <section className="lp-section" id="methode">
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
            <h2>Un projet à Paris ou en proche banlieue ?</h2>
            <p className="lp-areas">{AREAS.join(" · ")}</p>
            <div className="lp-final-actions">
              <a href="#formulaire" className="lp-btn lp-btn-solid">
                Décrire mon projet
              </a>
              <PhoneLink className="lp-btn lp-btn-ghost">Appeler</PhoneLink>
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

      {/* Barre d'action fixe, sur mobile uniquement */}
      <StickyBar />
    </div>
  );
}
