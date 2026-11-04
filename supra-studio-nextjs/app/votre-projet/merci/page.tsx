import type { Metadata } from "next";
import "../landing.css";
import PhoneLink from "@/components/landing/PhoneLink";
import ThanksClient from "@/components/landing/ThanksClient";
import { CALLBACK_PROMISE, PHONE_DISPLAY } from "@/lib/landing";

export const metadata: Metadata = {
  title: "Merci | Supra Studio",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
};

export default function MerciPage() {
  return (
    <div className="lp lp-thanks-page">
      <header className="lp-header">
        <img
          className="lp-logo"
          src="/assets/icons/logo-supra-studio-bleu.svg"
          alt="Supra Studio"
          width={132}
          height={50}
        />
      </header>

      <main className="lp-thanks">
        <p className="lp-label">Demande envoyée</p>
        <h1>
          <ThanksClient />
        </h1>
        <p className="lp-thanks-lead">
          Paul ou Beatrice vous rappelle <strong>{CALLBACK_PROMISE}</strong>, pour mieux comprendre
          votre projet et convenir d&apos;une visite.
        </p>

        <PhoneLink className="lp-btn lp-btn-solid lp-thanks-call">
          Vous préférez appeler ? {PHONE_DISPLAY}
        </PhoneLink>

        <div className="lp-thanks-offer">
          <h2>La suite</h2>
          <ol>
            <li>Un premier échange au téléphone pour cerner vos besoins et votre budget.</li>
            <li>Une visite sur place, offerte et sans engagement.</li>
            <li>
              Si le projet le justifie, une proposition d&apos;étude de faisabilité : contraintes,
              possibilités et enveloppe de travaux.
            </li>
          </ol>
        </div>
      </main>

      <footer className="lp-footer">
        <p>© {new Date().getFullYear()} Supra Studio · SARL · 14 rue des Fonds Verts, 75012 Paris</p>
        <p>
          <a href="/mentions-legales">Mentions légales</a> ·{" "}
          <a href="/politique-confidentialite">Politique de confidentialité</a>
        </p>
      </footer>
    </div>
  );
}
