import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suprastudio.fr"),
  title: "Supra Studio — Architecte d'intérieur & Paysagiste à Paris",
  description:
    "Architecte d'intérieur et paysagiste à Paris. Rénovation, maison neuve, aménagement extérieur haut de gamme. Duo franco-italien, entre Paris, Bordeaux et Rome.",
  keywords: [
    "architecte d'intérieur Paris",
    "paysagiste Paris",
    "rénovation appartement Paris",
    "architecture paysagère",
    "aménagement intérieur sur-mesure",
  ],
  openGraph: {
    title: "Supra Studio — Architecte d'intérieur & Paysagiste à Paris",
    description:
      "Atelier d'architecture d'intérieur et de paysage basé à Paris, entre Paris, Bordeaux et Rome.",
    url: "https://www.suprastudio.fr",
    siteName: "Supra Studio",
    locale: "fr_FR",
    type: "website",
    images: ["/assets/images/projet-01-exterieur.jpg"],
  },
  alternates: {
    canonical: "https://www.suprastudio.fr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Supra Studio",
  image: "https://www.suprastudio.fr/assets/images/projet-01-exterieur.jpg",
  "@id": "https://www.suprastudio.fr",
  url: "https://www.suprastudio.fr",
  telephone: "+33643853761",
  email: "contact@suprastudio.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 rue des Fonds Verts",
    postalCode: "75012",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: ["Paris", "Bordeaux", "Rome"],
  sameAs: [
    "https://www.instagram.com/suprastudio__/",
    "https://www.linkedin.com/company/suprastudio0/",
    "https://fr.pinterest.com/suprastudio_/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {gaId && (
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
