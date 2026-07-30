import { REVIEWS, GOOGLE_RATING, GOOGLE_REVIEWS_URL, getReviewsByIds } from "@/lib/reviews";
import { localizeReview } from "@/lib/reviews.i18n";
import { getDict, type Lang } from "@/lib/i18n";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`review-star${filled ? " is-filled" : ""}`}
      aria-hidden="true"
    >
      <path d="M10 1.6l2.51 5.24 5.79.68-4.29 3.98 1.16 5.7L10 14.9l-5.17 2.3 1.16-5.7L1.7 7.52l5.79-.68L10 1.6z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <div className="review-stars" role="img" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= rounded} />
      ))}
    </div>
  );
}

export default function Reviews({
  lang = "fr",
  ids,
  variant = "grid",
  title,
  showBadge = true,
}: {
  lang?: Lang;
  /** IDs des avis à afficher (voir lib/reviews.ts). Par défaut : les 3 premiers. */
  ids?: string[];
  /** "grid" = 3 colonnes (accueil) — "compact" = 2 colonnes (Studio / Services). */
  variant?: "grid" | "compact";
  /** Permet de personnaliser le H2 selon la page (sinon libellé générique). */
  title?: string;
  showBadge?: boolean;
}) {
  const t = getDict(lang);
  const source = ids ? getReviewsByIds(ids) : REVIEWS.slice(0, 3);
  const reviews = source.map((r) => localizeReview(r, lang));

  if (reviews.length === 0) return null;

  return (
    <section className={`reviews reviews-${variant}`}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="section-label">
              <span>{t.reviews.label}</span>
            </div>
            <h2 className="section-title">{title || t.reviews.title}</h2>
          </div>
          {showBadge && (
            <p className="reviews-badge">
              <span>
                {t.reviews.ratingBadgeLabel} {GOOGLE_RATING.value.toFixed(1)}
              </span>
              <Stars rating={GOOGLE_RATING.value} />
            </p>
          )}
        </div>

        <div className={`reviews-grid reviews-grid-${variant} reveal`}>
          {reviews.map((r) => (
            <figure className="review-card" key={r.id}>
              <Stars rating={r.rating} />
              <blockquote>
                <p>{r.quote}</p>
              </blockquote>
              <figcaption>
                <span className="review-author">{r.author}</span>
                {r.context && <span className="review-context">{r.context}</span>}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow reviews-link"
        >
          {t.reviews.linkText}
        </a>
      </div>
    </section>
  );
}
