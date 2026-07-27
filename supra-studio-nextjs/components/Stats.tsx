const STATS = [
  { figure: "3 villes, 2 pays, 1 vision", label: "Paris · Bordeaux · Rome" },
  { figure: "+ 15 ans", label: "D'expérience cumulée" },
  {
    figure: "3 spécialités diplômées",
    label: "Architecte HMONP · Architecte d'intérieur · Paysagiste D.E.",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {STATS.map((s) => (
          <div className="stat reveal" key={s.figure}>
            <p className="stat-figure">{s.figure}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
