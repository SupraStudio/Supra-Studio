import { getDict, type Lang } from "@/lib/i18n";

export default function Intro({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="intro">
      <div className="wrap intro-grid reveal">
        <p className="intro-quote">{t.home.introQuote}</p>
        <div className="intro-text">
          <p>{t.home.introText}</p>
        </div>
      </div>
    </section>
  );
}
