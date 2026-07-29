import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.legalNotice };

export default function MentionsLegalesPage() {
  return <LegalPage doc={LEGAL.en.notice} lang="en" />;
}
