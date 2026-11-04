"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CALLBACK_PROMISE,
  FORM_STEPS,
  LEADS_ENDPOINT,
  SS_GCLID,
  SS_LEAD,
  THANKS_PATH,
} from "@/lib/landing";

type Answers = Record<string, string>;

const TOTAL = FORM_STEPS.length + 1; // questions + coordonnées

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [gclid, setGclid] = useState("");
  const headingRef = useRef<HTMLParagraphElement>(null);

  // Récupère le gclid ajouté par Google Ads dans l'URL, et le garde pour la session
  useEffect(() => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("gclid") || "";
      if (fromUrl) window.sessionStorage.setItem(SS_GCLID, fromUrl);
      setGclid(fromUrl || window.sessionStorage.getItem(SS_GCLID) || "");
    } catch {
      // sessionStorage indisponible : on se contente de l'URL
    }
  }, []);

  // Accessibilité : focus sur la nouvelle question à chaque étape
  useEffect(() => {
    if (step > 0) headingRef.current?.focus();
  }, [step]);

  function choose(field: string, value: string) {
    setAnswers((a) => ({ ...a, [field]: value }));
    setStep((s) => s + 1);
  }

  function back() {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);

    const prenom = String(data.get("prenom") || "").trim();
    const telephone = String(data.get("telephone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const code_postal = String(data.get("code_postal") || "").trim();

    if (!prenom || !telephone || !email || !code_postal) {
      setError("Merci de remplir les quatre champs.");
      return;
    }
    if (telephone.replace(/[^\d]/g, "").length < 9) {
      setError("Le numéro de téléphone semble incomplet.");
      return;
    }
    if (!/^\d{5}$/.test(code_postal)) {
      setError("Le code postal doit comporter 5 chiffres.");
      return;
    }

    setError("");
    setSending(true);

    const payload = new URLSearchParams({
      prenom,
      telephone,
      email,
      code_postal,
      proprietaire: answers.proprietaire || "",
      type_bien: answers.type_bien || "",
      projet: answers.projet || "",
      budget: answers.budget || "",
      delai: answers.delai || "",
      page: window.location.href,
      gclid,
      website: String(data.get("website") || ""),
      date: new Date().toISOString(),
    });

    try {
      // no-cors : Apps Script ne renvoie pas d'en-têtes CORS ; la réponse est opaque,
      // mais la demande est bien reçue et enregistrée.
      await fetch(LEADS_ENDPOINT, { method: "POST", mode: "no-cors", body: payload });
    } catch {
      setSending(false);
      setError("La connexion a échoué. Réessayez, ou appelez-nous directement.");
      return;
    }

    try {
      window.sessionStorage.setItem(
        SS_LEAD,
        JSON.stringify({ prenom, id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}` })
      );
    } catch {
      // sans sessionStorage, la page merci s'affiche quand même
    }
    router.push(THANKS_PATH);
  }

  const current = FORM_STEPS[step];
  const progress = Math.round(((step + 1) / TOTAL) * 100);

  return (
    <div className="lp-form">
      <div className="lp-form-top">
        <p className="lp-form-kicker">Votre demande</p>
        <p className="lp-form-count">
          Étape {step + 1} / {TOTAL}
        </p>
      </div>
      <div
        className="lp-progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label="Progression du formulaire"
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      {current ? (
        <div className="lp-step" key={current.field}>
          <p className="lp-question" tabIndex={-1} ref={headingRef}>
            {current.question}
          </p>
          <div
            className={`lp-options${current.options.length <= 2 ? " lp-options-two" : ""}`}
            role="group"
            aria-label={current.question}
          >
            {current.options.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`lp-option${answers[current.field] === opt ? " is-selected" : ""}`}
                onClick={() => choose(current.field, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form className="lp-step lp-contact" onSubmit={submit} noValidate>
          <p className="lp-question" tabIndex={-1} ref={headingRef}>
            Où pouvons-nous vous rappeler ?
          </p>
          <label>
            <span>Prénom</span>
            <input name="prenom" type="text" autoComplete="given-name" required />
          </label>
          <label>
            <span>Téléphone</span>
            <input name="telephone" type="tel" autoComplete="tel" inputMode="tel" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" inputMode="email" required />
          </label>
          <label>
            <span>Code postal</span>
            <input
              name="code_postal"
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              maxLength={5}
              required
            />
          </label>

          {/* Champ anti-spam invisible : les robots le remplissent, pas les humains */}
          <div className="lp-hp" aria-hidden="true">
            <label>
              Site web
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {error && (
            <p className="lp-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="lp-submit" disabled={sending}>
            {sending ? "Envoi en cours…" : "Être rappelé"}
          </button>
          <p className="lp-legal">
            Rappel {CALLBACK_PROMISE}. Vos informations servent uniquement à vous recontacter au
            sujet de votre projet.{" "}
            <a href="/politique-confidentialite" target="_blank" rel="noopener">
              Politique de confidentialité
            </a>.
          </p>
        </form>
      )}

      {step > 0 && (
        <button type="button" className="lp-back" onClick={back}>
          ← Retour
        </button>
      )}
    </div>
  );
}
