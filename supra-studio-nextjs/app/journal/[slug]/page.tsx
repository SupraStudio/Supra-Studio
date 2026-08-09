import type { Metadata } from "next";
import { JOURNAL_ARTICLES } from "@/lib/journal";
import { localizeArticle } from "@/lib/journal.i18n";
import { dict, hreflangAlternates } from "@/lib/i18n";
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
  return {
    title: `${article.metaTitle || article.title} — Supra Studio`,
    description: article.excerpt,
    alternates: hreflangAlternates(`/journal/${article.slug}`, "fr"),
  };
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <JournalDetail slug={params.slug} lang="fr" />;
}
