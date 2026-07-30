import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Footer({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} Supra Studio — {t.footer.rights}</span>
        <div className="footer-links">
          <a href={localizedHref("/faq", lang)}>{t.faqPage.label}</a>
          <a href={localizedHref("/mentions-legales", lang)}>{t.footer.legal}</a>
          <a href={localizedHref("/politique-confidentialite", lang)}>{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
