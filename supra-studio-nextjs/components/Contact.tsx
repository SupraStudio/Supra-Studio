"use client";

import { useState } from "react";
import { getDict, CALENDLY_URL, type Lang } from "@/lib/i18n";
import SocialLinks from "@/components/SocialLinks";

export default function Contact({ asH1 = false, lang = "fr" }: { asH1?: boolean; lang?: Lang }) {
  const t = getDict(lang);
  const Title = asH1 ? "h1" : "h2";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
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
            <span>{t.contactPage.label}</span>
          </div>
          <Title className="section-title" style={{ marginBottom: 24 }}>
            {asH1 ? t.contactPage.h1Title : t.contactPage.title}
          </Title>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <input type="text" name="name" placeholder={t.contactPage.formName} required />
              </div>
              <div className="field">
                <input type="email" name="email" placeholder={t.contactPage.formEmail} required />
              </div>
            </div>
            <div className="field">
              <input type="tel" name="phone" placeholder={t.contactPage.formPhone} />
            </div>
            <div className="field">
              <textarea
                name="message"
                rows={5}
                placeholder={t.contactPage.formMessage}
                required
              />
            </div>
            <button type="submit" className="btn btn-fill" disabled={status === "sending"}>
              {status === "sending" ? t.contactPage.sending : t.contactPage.submit}
            </button>
            {status === "sent" && <p>{t.contactPage.sent}</p>}
            {status === "error" && (
              <p>{t.contactPage.error}</p>
            )}
          </form>
        </div>

        <div className="contact-info reveal">
          <div className="section-label">
            <span>{t.contactPage.infoLabel}</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            {t.contactPage.meetTitle}
          </h2>

          <div className="info-block">
            <h4>{t.contactPage.addressLabel}</h4>
            <p>14 rue des Fonds Verts, 75012 Paris</p>
          </div>
          <div className="info-block">
            <h4>{t.contactPage.phoneLabel}</h4>
            <a href="tel:+33643853761">06 43 85 37 61</a>
          </div>
          <div className="info-block">
            <h4>{t.contactPage.emailLabel}</h4>
            <a href="mailto:contact@suprastudio.fr">contact@suprastudio.fr</a>
          </div>
          <div className="info-block">
            <h4>{t.contactPage.appointmentLabel}</h4>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.bookSlot}
            </a>
          </div>

          <div className="info-block">
            <h4>{t.contactPage.followLabel}</h4>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
