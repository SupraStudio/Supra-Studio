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
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|telegrambot|discordbot|semrush|ahrefs|mj12bot|pingdom|uptimerobot/i;

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

  // First visit, no stored preference yet: detect the country from Vercel's edge header.
  const country = request.headers.get("x-vercel-ip-country") || "";

  if (!country) {
    // Local dev or unknown origin: stay on the French default, don't guess.
    return NextResponse.next();
  }

  let targetLocale: "en" | "it" | null = null;
  if (country === "IT") {
    targetLocale = "it";
  } else if (!FRENCH_SPEAKING_COUNTRIES.has(country)) {
    targetLocale = "en";
  }

  if (!targetLocale) {
    // French-speaking country: stay on "/", remember it so we never re-check.
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
