"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getDict, LOCALES, CALENDLY_URL, type Lang, localizedHref, stripLocaleFromPath } from "@/lib/i18n";

export default function Header({
  hasHero = true,
  lang = "fr",
}: {
  hasHero?: boolean;
  lang?: Lang;
}) {
  const t = getDict(lang);
  const pathname = usePathname() || "/";
  const basePath = stripLocaleFromPath(pathname);

  const NAV_LINKS = [
    { label: t.nav.studio, href: localizedHref("/studio", lang) },
    { label: t.nav.projects, href: localizedHref("/projets", lang) },
    { label: t.nav.services, href: localizedHref("/services", lang) },
    { label: t.nav.contact, href: localizedHref("/contact", lang) },
  ];

  const [scrolled, setScrolled] = useState(!hasHero);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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

  const LangLinks = () => (
    <>
      {LOCALES.map((l, i) => (
        <span key={l} style={{ display: "flex", gap: 6 }}>
          <a href={localizedHref(basePath, l)} className={lang === l ? "active" : ""}>
            {l.toUpperCase()}
          </a>
          {i < LOCALES.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </>
  );

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a href={localizedHref("/", lang)} className="logo" aria-label="Supra Studio — Accueil">
        <img src="/assets/icons/LOGO_COMPLET_BLEU.svg" alt="Supra Studio" />
      </a>

      <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Navigation principale">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="mobile-lang">
          <LangLinks />
        </div>
      </nav>

      <div className="header-right">
        <div className="lang-switch">
          <LangLinks />
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-header-cta"
          aria-label={t.bookAppointment}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
            <path d="M3 9.5h18" />
            <path d="M8 2.5v4M16 2.5v4" strokeLinecap="round" />
          </svg>
          <span className="cta-full">{t.bookAppointment}</span>
          <span className="cta-short">{t.bookShort}</span>
        </a>
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
