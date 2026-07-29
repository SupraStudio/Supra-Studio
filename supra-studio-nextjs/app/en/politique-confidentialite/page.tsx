import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.en.meta.privacy };

export default function PolitiqueConfidentialitePage() {
  return <LegalPage doc={LEGAL.en.privacy} lang="en" />;
}
