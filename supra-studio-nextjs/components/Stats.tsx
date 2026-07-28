import { getDict, type Lang } from "@/lib/i18n";

export default function Stats({ lang = "fr" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {t.home.stats.map((s) => (
          <div className="stat reveal" key={s.figure}>
            <p className="stat-figure">{s.figure}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
