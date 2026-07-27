"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // NOTE: replace with your real form endpoint (e.g. Formspree, EmailJS)
      // before going live — see the message accompanying this project.
      const res = await fetch("https://formspree.io/f/REPLACE_ME", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <div className="section-label">
            <span>Contact</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Parlons de votre projet
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <input type="text" name="name" placeholder="Nom" required />
              </div>
              <div className="field">
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="field">
              <input type="tel" name="phone" placeholder="Téléphone" />
            </div>
            <div className="field">
              <textarea
                name="message"
                rows={5}
                placeholder="Votre projet en quelques mots"
                required
              />
            </div>
            <button type="submit" className="btn btn-fill" disabled={status === "sending"}>
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>
            {status === "sent" && <p>Merci, votre message a bien été envoyé.</p>}
            {status === "error" && (
              <p>Une erreur est survenue, merci de réessayer.</p>
            )}
          </form>
        </div>

        <div className="contact-info reveal">
          <div className="section-label">
            <span>Coordonnées</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Nous rencontrer
          </h2>

          <div className="info-block">
            <h4>Adresse</h4>
            <p>14 rue des Fonds Verts, 75012 Paris</p>
          </div>
          <div className="info-block">
            <h4>Téléphone</h4>
            <a href="tel:+33643853761">06 43 85 37 61</a>
          </div>
          <div className="info-block">
            <h4>Email</h4>
            <a href="mailto:contact@suprastudio.fr">contact@suprastudio.fr</a>
          </div>
          <div className="info-block">
            <h4>Prendre rendez-vous</h4>
            <a
              href="https://calendly.com/suprastudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un créneau via Calendly ↗
            </a>
          </div>

          <div className="info-block">
            <h4>Suivez-nous</h4>
            <div className="socials">
              <a
                href="https://www.instagram.com/suprastudio__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/suprastudio0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.06 8.24h4.37v2.02h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.11h-4.56v-7.19c0-1.72-.03-3.93-2.39-3.93-2.4 0-2.77 1.87-2.77 3.8v7.32H8.06V8.24z" />
                </svg>
              </a>
              <a
                href="https://fr.pinterest.com/suprastudio_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.06-.98-.11-2.5.02-3.58.12-.94.8-6 .8-6s-.2-.4-.2-1c0-.94.55-1.65 1.23-1.65.58 0 .86.44.86.96 0 .58-.37 1.46-.56 2.27-.16.68.34 1.23 1 1.23 1.2 0 2.13-1.27 2.13-3.1 0-1.62-1.16-2.75-2.83-2.75-1.93 0-3.06 1.44-3.06 2.94 0 .58.22 1.2.5 1.54a.2.2 0 0 1 .05.19c-.05.22-.17.68-.2.78-.03.13-.1.16-.24.1-1.13-.53-1.83-2.17-1.83-3.5 0-2.85 2.07-5.47 5.97-5.47 3.13 0 5.57 2.23 5.57 5.2 0 3.1-1.96 5.6-4.67 5.6-.91 0-1.77-.47-2.06-1.03l-.56 2.14c-.2.78-.75 1.75-1.11 2.35A12 12 0 1 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
