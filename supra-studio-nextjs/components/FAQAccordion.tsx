"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.id}>
            <h3 className="faq-question-wrap">
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              className={`faq-answer-wrap${isOpen ? " is-open" : ""}`}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
