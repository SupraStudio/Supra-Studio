import type { Metadata } from "next";
import { JOURNAL_ARTICLES } from "@/lib/journal";
import { localizeArticle } from "@/lib/journal.i18n";
import { dict, hreflangAlternates, SITE_URL } from "@/lib/i18n";
import JournalDetail, { getArticleBySlug } from "@/components/JournalDetail";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const raw = getArticleBySlug(params.slug);
  if (!raw) return {};
  const article = localizeArticle(raw, "fr");
  const url = `${SITE_URL}/journal/${article.slug}`;
  const ogTitle = article.metaTitle || article.title;
  return {
    title: `${ogTitle} — Supra Studio`,
    description: article.excerpt,
    alternates: hreflangAlternates(`/journal/${article.slug}`, "fr"),
    openGraph: {
      title: ogTitle,
      description: article.excerpt,
      url,
      siteName: "Supra Studio",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: `${SITE_URL}${article.cover}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <JournalDetail slug={params.slug} lang="fr" />;
}
