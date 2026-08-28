import type { Article } from '../../data/articles';
import { ArticleCard } from './ArticleCard';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function RelatedArticles({ articles }: { articles: Article[] }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  if (articles.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-2xl font-light tracking-title text-brun">
          À lire aussi
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
