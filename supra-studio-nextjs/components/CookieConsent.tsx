"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  getDict,
  getLangFromPath,
  localizedHref,
  stripLocaleFromPath,
} from "@/lib/i18n";
import { ADS_ID } from "@/lib/landing";

type Consent = "accepted" | "declined" | null;

const STORAGE_KEY = "supra_cookie_consent";

// Pages that open on a full-bleed dark hero image (home, studio, project detail).
function pathHasHero(basePath: string) {
  if (basePath === "/") return true;
  if (basePath === "/studio") return true;
  if (basePath.startsWith("/projets/")) return true;
  return false;
}

export default function CookieConsent({ gaId }: { gaId?: string }) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = getDict(lang);

  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [onHero, setOnHero] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // localStorage unavailable — treat as no stored decision.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const heroPage = pathHasHero(stripLocaleFromPath(pathname));
    function update() {
      setOnHero(heroPage && window.scrollY < 10);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  function choose(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore — the banner still hides for this session via state.
    }
    setConsent(value);
    // Prévient la page merci (conversion Google Ads) que le choix vient d'être fait.
    window.dispatchEvent(new CustomEvent("supra-consent", { detail: value }));
  }

  return (
    <>
      {/* Google Ads + Google Analytics, chargés uniquement après acceptation (exigence CNIL).
          L'état de consentement par défaut (« refusé ») est déclaré dans app/layout.tsx
          (Consent Mode v2) ; on le passe ici à « accordé ». */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId || ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){dataLayer.push(arguments);};
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : ""}
              gtag('config', '${ADS_ID}');
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          className={`cookie-banner${onHero ? " cookie-banner-on-hero" : ""}`}
          role="dialog"
          aria-label={t.cookieBanner.title}
        >
          <p className="cookie-banner-text">
            {t.cookieBanner.text}
            <br className="cookie-banner-break" />{" "}
            <a
              className="cookie-banner-link"
              href={localizedHref("/politique-confidentialite", lang)}
            >
              {t.cookieBanner.link}
            </a>
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn"
              onClick={() => choose("declined")}
            >
              {t.cookieBanner.decline}
            </button>
            <button
              type="button"
              className="cookie-btn"
              onClick={() => choose("accepted")}
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
