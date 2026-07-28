import { getDict, type Lang } from "@/lib/i18n";

export default function Expertise({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="expertise">
      <div className="wrap reveal">
        <p className="expertise-quote">{t.home.expertiseQuote}</p>
      </div>
    </section>
  );
}
