import { Star } from 'lucide-react';
import type { Review, ReviewSummary } from '../../data/products';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function StarRow({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={i < Math.round(rating) ? 'fill-dore text-dore' : 'text-brun/20'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-t border-dore/20 py-6 first:border-t-0">
      <div className="flex items-center gap-3">
        <img
          loading="lazy"
          src={review.photo}
          alt={review.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-brun">
            {review.name}
            <span className="ml-1.5 font-normal text-brun/50">
              · {review.city}
            </span>
          </p>
          <div className="mt-0.5 flex items-center gap-2">
            <StarRow rating={review.rating} />
            <span className="text-xs text-brun/40">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-body text-brun/75">{review.text}</p>
    </div>
  );
}

export function ReviewsSection({
  summary,
  reviews,
}: {
  summary: ReviewSummary;
  reviews: Review[];
}) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();
  const stars = [5, 4, 3, 2, 1];

  return (
    <section ref={ref} className={className}>
      <h2 className="font-heading text-2xl font-light tracking-title text-brun">
        Avis clientes
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-[240px_1fr]">
        {/* Distribution */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-4xl font-light text-brun">
              {summary.average.toFixed(1)}
            </span>
            <span className="text-sm text-brun/50">/ 5</span>
          </div>
          <StarRow rating={summary.average} size={15} />
          <p className="mt-1 text-xs text-brun/50">
            {summary.total} avis vérifiés
          </p>

          <div className="mt-5 flex flex-col gap-1.5">
            {stars.map((star, i) => (
              <div key={star} className="flex items-center gap-2 text-xs text-brun/50">
                <span className="w-6">{star}★</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-sable">
                  <span
                    className="block h-full rounded-full bg-dore"
                    style={{ width: `${summary.distribution[i]}%` }}
                  />
                </span>
                <span className="w-8 text-right">
                  {summary.distribution[i]}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Avis */}
        <div>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
