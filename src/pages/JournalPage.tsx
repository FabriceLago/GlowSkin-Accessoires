import { articles } from '../data/articles';
import { ArticleCard } from '../components/journal/ArticleCard';
import { useScrollFadeUp } from '../hooks/useScrollFadeUp';
import { useSeo } from '../hooks/useSeo';

export function JournalPage() {
  useSeo({
    title: 'Journal — GlowSkin Accessoires',
    description:
      'Guides et notes sur le rituel beauté : routines, choix des accessoires, entretien — sans promesse ni superflu.',
  });

  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={`${className} mx-auto max-w-xl text-center`}>
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          Journal
        </h1>
        <p className="mt-4 text-sm leading-body text-brun/60">
          Des guides et des notes sur le rituel, sans promesse ni superflu —
          juste ce qui aide à mieux comprendre ses gestes.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
