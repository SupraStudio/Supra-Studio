import type { Metadata } from "next";
import { JOURNAL_ARTICLES } from "@/lib/journal";
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
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Supra Studio`,
    description: article.excerpt,
    alternates: hreflangAlternates(`/journal/${article.slug}`),
  };
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <JournalDetail slug={params.slug} lang="fr" />;
}
