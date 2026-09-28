import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Cookie posé quand le visiteur choisit lui-même une langue via le sélecteur FR/EN/IT,
// ou quand la redirection automatique a déjà eu lieu — pour ne jamais la relancer et
// toujours respecter le choix explicite de l'utilisateur ensuite.
const LOCALE_COOKIE = "supra_lang";

// Pays francophones (ou à forte proportion de visiteurs francophones) : le site reste
// en français par défaut, sans redirection.
const FRENCH_SPEAKING_COUNTRIES = new Set([
  "FR", "BE", "CH", "LU", "MC", "CA", "SN", "CI", "MA", "TN", "DZ", "CD", "CM",
]);

const BOT_PATTERN =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|telegrambot|discordbot|semrush|ahrefs|mj12bot|pingdom|uptimerobot|google|apis-google/i;

function isStaticOrExcludedPath(pathname: string) {
  return (
    pathname.startsWith("/en") ||
    pathname.startsWith("/it") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[a-zA-Z0-9]+$/.test(pathname) // any file with an extension (favicon, images, etc.)
  );
}

// Langue préférée du navigateur (ex. "fr-FR,fr;q=0.9,en;q=0.8" -> "fr"). C'est un signal
// beaucoup plus fiable que la géolocalisation IP — elle reflète un réglage explicite de
// l'appareil, alors qu'une IP peut être mal classée par la base de données de géolocalisation
// (cas fréquent avec certaines box internet). On lui donne donc la priorité.
function getBrowserLang(request: NextRequest): "fr" | "en" | "it" | null {
  const header = request.headers.get("accept-language") || "";
  const first = header.split(",")[0]?.trim().slice(0, 2).toLowerCase();
  if (first === "fr" || first === "en" || first === "it") return first;
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isStaticOrExcludedPath(pathname)) {
    return NextResponse.next();
  }

  // Never redirect search engine crawlers or bots — they must always see the canonical
  // French URL at "/", exactly as declared in the sitemap and hreflang tags. Redirecting
  // bots would break indexing of the French pages and confuse the hreflang setup.
  const userAgent = request.headers.get("user-agent") || "";
  if (BOT_PATTERN.test(userAgent)) {
    return NextResponse.next();
  }

  // Respect an explicit, previous choice (manual switch or earlier auto-redirect)
  const cookieLang = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLang === "fr") {
    return NextResponse.next();
  }
  if (cookieLang === "en" || cookieLang === "it") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${cookieLang}` : `/${cookieLang}${pathname}`;
    return NextResponse.redirect(url);
  }

  // First visit, no stored preference yet.
  const browserLang = getBrowserLang(request);

  let targetLocale: "en" | "it" | null = null;

  if (browserLang) {
    // The device's own language setting takes priority over IP geolocation.
    targetLocale = browserLang === "fr" ? null : browserLang;
  } else {
    // No usable Accept-Language: fall back to the country provided by Vercel's edge.
    // This fallback only ever distinguishes French-speaking vs. not — it must NOT infer
    // Italian purely from "currently in Italy" (e.g. a Greek tourist visiting Italy has no
    // more reason to read Italian than French; English is the safer generic default).
    // Only an actual Italian browser language (handled above) should ever trigger /it.
    const country = request.headers.get("x-vercel-ip-country") || "";
    if (!country) {
      // Local dev or unknown origin: stay on the French default, don't guess.
      return NextResponse.next();
    }
    if (!FRENCH_SPEAKING_COUNTRIES.has(country)) {
      targetLocale = "en";
    }
  }

  if (!targetLocale) {
    // French: stay on "/", remember it so we never re-check.
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, "fr", { maxAge: 60 * 60 * 24 * 365, path: "/" });
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${targetLocale}` : `/${targetLocale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, targetLocale, { maxAge: 60 * 60 * 24 * 365, path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|assets).*)"],
};
