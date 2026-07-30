import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { JOURNAL_ARTICLES } from "@/lib/journal";
import { SITE_URL, LOCALE_PREFIX, LOCALES } from "@/lib/i18n";

const STATIC_PATHS = [
  "/",
  "/studio",
  "/projets",
  "/journal",
  "/services",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const projectPaths = PROJECTS.filter((p) => !p.wip).map((p) => `/projets/${p.slug}`);
  const journalPaths = JOURNAL_ARTICLES.map((a) => `/journal/${a.slug}`);
  const allPaths = [...STATIC_PATHS, ...projectPaths, ...journalPaths];

  for (const path of allPaths) {
    for (const lang of LOCALES) {
      const prefix = LOCALE_PREFIX[lang];
      const url = path === "/" ? `${SITE_URL}${prefix || ""}` : `${SITE_URL}${prefix}${path}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : path.startsWith("/projets/") || path.startsWith("/journal/") ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}
