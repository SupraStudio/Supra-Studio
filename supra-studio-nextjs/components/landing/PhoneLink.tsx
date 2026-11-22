"use client";

import { ADS_LABEL_PHONE, PHONE_HREF, trackConversion, trackEvent } from "@/lib/landing";

// Lien d'appel qui déclenche la conversion « Clic téléphone » (si son libellé est renseigné
// dans lib/landing.ts et si le visiteur a accepté les cookies).
export default function PhoneLink({
  className,
  children,
  ariaLabel,
  location = "autre",
}: {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  /** Emplacement du bouton, pour savoir lesquels sont utilisés (suivi GA4) */
  location?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        trackConversion(ADS_LABEL_PHONE);
        trackEvent("lp_phone_click", { location });
      }}
    >
      {children}
    </a>
  );
}
