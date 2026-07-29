import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.legalNotice, alternates: hreflangAlternates("/mentions-legales") };

export default function MentionsLegalesPage() {
  return <LegalPage doc={LEGAL.it.notice} lang="it" />;
}
