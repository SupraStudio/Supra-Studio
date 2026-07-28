export default function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="wrap studio-grid">
        <div className="studio-media-wrap reveal">
          <div className="studio-media">
            <img
              src="/assets/images/fondateurs.jpg"
              alt="Beatrice et Paul, fondateurs de Supra Studio"
            />
          </div>
        </div>

        <div className="studio-text reveal">
          <div className="section-label">
            <span>Le studio</span>
          </div>
          <h2 className="section-title">Un duo, deux parcours</h2>
          <p>
            Supra Studio, c&rsquo;est la rencontre de deux parcours
            complémentaires et internationaux. Beatrice, diplômée de La
            Sapienza à Rome et habilitée HMONP à Paris, a travaillé au sein
            d&rsquo;agences d&rsquo;architecture à Paris. Paul, formé à
            Bordeaux en architecture d&rsquo;intérieur et en paysage, a lui
            aussi travaillé à Paris, au sein d&rsquo;agences
            d&rsquo;architecture et de paysage.
          </p>
          <p>
            Ensemble, ils mettent en commun leurs expertises en architecture
            d&rsquo;intérieur et en architecture paysagère, guidés par une
            même exigence de justesse, de créativité et de qualité, de la
            conception au suivi de chantier.
          </p>
          <a href="/studio" className="btn btn-dark">
            En savoir plus sur le studio
          </a>
        </div>
      </div>
    </section>
  );
}
