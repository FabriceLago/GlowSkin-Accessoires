import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { Article } from '../../data/articles';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function ArticleCard({ article }: { article: Article }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <Link to={`/journal/${article.slug}`} className="group block">
        <div className="hover-zoom aspect-[3/2] overflow-hidden rounded-card">
          <img
            loading="lazy"
            src={article.cover}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-medium uppercase tracking-widest text-sauge-ink">
            {article.category}
          </p>
          <h3 className="mt-1.5 font-heading text-xl font-normal text-brun transition-colors group-hover:text-terracotta-ink">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-body text-brun/60">
            {article.excerpt}
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-brun/45">
            <Clock size={12} strokeWidth={1.5} />
            {article.readingTime} de lecture
          </div>
        </div>
      </Link>
    </div>
  );
}
