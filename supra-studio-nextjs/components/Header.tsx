"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ hasHero = true }: { hasHero?: boolean }) {
  const [scrolled, setScrolled] = useState(!hasHero);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN" | "IT">("FR");

  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a href="/" className="logo" aria-label="Supra Studio — Accueil">
        <img src="/assets/icons/LOGO_COMPLET_BLEU.svg" alt="Supra Studio" />
      </a>

      <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Navigation principale">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="mobile-lang">
          {(["FR", "EN", "IT"] as const).map((l) => (
            <button
              key={l}
              className={lang === l ? "active" : ""}
              onClick={() => setLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      <div className="header-right">
        <div className="lang-switch">
          {(["FR", "EN", "IT"] as const).map((l, i) => (
            <span key={l} style={{ display: "flex", gap: 6 }}>
              <button
                className={lang === l ? "active" : ""}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
              {i < 2 && <span aria-hidden="true">/</span>}
            </span>
          ))}
        </div>
        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
