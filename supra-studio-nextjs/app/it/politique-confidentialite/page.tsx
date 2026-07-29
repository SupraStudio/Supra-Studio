import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.privacy };

export default function PolitiqueConfidentialitePage() {
  return <LegalPage doc={LEGAL.it.privacy} lang="it" />;
}
