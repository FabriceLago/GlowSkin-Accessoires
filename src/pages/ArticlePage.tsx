import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { articles, type ArticleBlock } from '../data/articles';
import { RelatedArticles } from '../components/journal/RelatedArticles';
import { useSeo } from '../hooks/useSeo';

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-10 font-heading text-2xl font-light tracking-title text-brun">
          {block.text}
        </h2>
      );
    case 'image':
      return (
        <figure className="my-8">
          <img
            loading="lazy"
            src={block.src}
            alt={block.alt}
            className="w-full rounded-card object-cover"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-brun/45">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case 'paragraph':
    default:
      return (
        <p className="mt-5 text-base leading-body text-brun/75">
          {block.text}
        </p>
      );
  }
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useSeo({
    title: article
      ? `${article.title} — Journal GlowSkin Accessoires`
      : 'Article introuvable — GlowSkin Accessoires',
    description: article?.excerpt ?? 'Cet article n’existe pas ou plus.',
    image: article?.cover,
    type: 'article',
  });

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-brun/50">
          <Link to="/" className="hover:text-brun">
            Accueil
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/journal" className="hover:text-brun">
            Journal
          </Link>
        </nav>

        <p className="mt-8 text-center text-[11px] font-medium uppercase tracking-widest text-sauge-ink">
          {article.category}
        </p>
        <h1 className="mt-3 text-center font-heading text-3xl font-light tracking-title text-brun sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-brun/50">
          <span>{article.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} strokeWidth={1.5} />
            {article.readingTime} de lecture
          </span>
        </div>
      </div>

      <div className="mt-10 aspect-[16/7] w-full overflow-hidden">
        <img
          loading="lazy"
          src={article.cover}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <article className="mx-auto max-w-[620px] px-6 py-12 lg:py-16">
        {article.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>

      <div className="border-t border-dore/20">
        <RelatedArticles articles={related} />
      </div>
    </div>
  );
}
