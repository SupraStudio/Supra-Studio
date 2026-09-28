import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.legalNotice, alternates: hreflangAlternates("/mentions-legales", "en") };

export default function MentionsLegalesPage() {
  return <LegalPage doc={LEGAL.en.notice} lang="en" />;
}
