"use client";

import { useState } from "react";
import { getDict, type Lang } from "@/lib/i18n";

export default function InterventionAreas({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="areas-section">
      <div className="wrap">
        <div className="section-label reveal">
          <span>{t.servicesPage.areasLabel}</span>
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: 24 }}>
          {t.servicesPage.areasTitle}
        </h2>
        <p className="services-intro reveal">{t.servicesPage.areasIntro}</p>

        <div className="areas-list reveal">
          {t.servicesPage.areas.map((area) => {
            const isOpen = openId === area.id;
            return (
              <div className={`areas-item${isOpen ? " is-open" : ""}`} key={area.id}>
                <h3 className="areas-question-wrap">
                  <button
                    type="button"
                    className="areas-question"
                    aria-expanded={isOpen}
                    aria-controls={`areas-answer-${area.id}`}
                    onClick={() => setOpenId(isOpen ? null : area.id)}
                  >
                    <span className="areas-question-text">
                      <span className="areas-question-title">{area.title}</span>
                      <span className="areas-question-tag">{area.tag}</span>
                    </span>
                    <span className="areas-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`areas-answer-${area.id}`}
                  className={`areas-answer-wrap${isOpen ? " is-open" : ""}`}
                >
                  <div className="areas-answer-inner">
                    {area.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
