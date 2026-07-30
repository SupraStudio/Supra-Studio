import { getDict, type Lang } from "@/lib/i18n";

export default function Vision({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="vision">
      <div className="wrap reveal">
        <div className="section-label">
          <span>{t.studioPage.visionLabel}</span>
        </div>
        <p className="vision-text">{t.studioPage.visionText}</p>
      </div>
    </section>
  );
}
