import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Studio({ full = false, lang = "fr" }: { full?: boolean; lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="studio" id="studio">
      <div className="wrap studio-grid">
        <div className={`studio-media-wrap reveal${full ? " studio-duo" : ""}`}>
          <div className="studio-media">
            <img
              src="/assets/images/fondateurs.jpg"
              alt="Beatrice et Paul, fondateurs de Supra Studio"
            />
          </div>
          {full && (
            <div className="studio-media">
              <img
                src="/assets/images/fondateurs2.jpg"
                alt="Beatrice et Paul, fondateurs de Supra Studio"
              />
            </div>
          )}
        </div>

        <div className="studio-text reveal">
          <div className="section-label">
            <span>{t.studioPage.sectionLabel}</span>
          </div>
          <h2 className="section-title">{t.studioPage.title}</h2>
          <p>{t.studioPage.p1}</p>
          <p>{t.studioPage.p2}</p>
          {!full && (
            <a href={localizedHref("/studio", lang)} className="btn btn-dark">
              {t.learnMoreStudio}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
