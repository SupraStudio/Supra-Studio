"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { getDict, getLangFromPath, localizedHref } from "@/lib/i18n";

type Consent = "accepted" | "declined" | null;

const STORAGE_KEY = "supra_cookie_consent";

export default function CookieConsent({ gaId }: { gaId?: string }) {
  const pathname = usePathname() || "/";
  const lang = getLangFromPath(pathname);
  const t = getDict(lang);

  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

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

  function choose(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore — the banner still hides for this session via state.
    }
    setConsent(value);
  }

  return (
    <>
      {gaId && consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div className="cookie-banner" role="dialog" aria-label={t.cookieBanner.title}>
          <p className="cookie-banner-text">
            {t.cookieBanner.text}{" "}
            <a href={localizedHref("/politique-confidentialite", lang)}>
              {t.cookieBanner.link}
            </a>
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-decline"
              onClick={() => choose("declined")}
            >
              {t.cookieBanner.decline}
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-accept"
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
