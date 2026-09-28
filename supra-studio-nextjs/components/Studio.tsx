import { getDict, localizedHref, type Lang } from "@/lib/i18n";

export default function Studio({ full = false, lang = "fr" }: { full?: boolean; lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="studio" id="studio">
      <div className="wrap studio-grid">
        <div className={`studio-media-wrap reveal${full ? " studio-duo" : ""}`}>
          <div className="studio-media">
            <img
              src="/assets/images/paul-beatrice-fondateurs-supra-studio.jpg"
              alt="Beatrice et Paul, fondateurs de Supra Studio"
            />
          </div>
          {full && (
            <div className="studio-media">
              <img
                src="/assets/images/duo-architectes-supra-studio-portrait.jpg"
                alt="Beatrice et Paul, fondateurs de Supra Studio"
              />
            </div>
          )}
        </div>

        <div className="studio-text reveal">
          <div className="section-label">
            <span>{t.studioPage.sectionLabel}</span>
          </div>
          <h2 className="section-title">{full ? t.studioPage.title : t.studioPage.titleHome}</h2>
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
