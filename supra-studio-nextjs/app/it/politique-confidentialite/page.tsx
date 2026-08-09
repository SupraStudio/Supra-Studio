import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { dict, hreflangAlternates } from "@/lib/i18n";

export const metadata: Metadata = { ...dict.it.meta.privacy, alternates: hreflangAlternates("/politique-confidentialite", "it") };

export default function PolitiqueConfidentialitePage() {
  return <LegalPage doc={LEGAL.it.privacy} lang="it" />;
}
