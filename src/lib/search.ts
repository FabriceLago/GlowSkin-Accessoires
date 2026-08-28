import { products, type Product } from '../data/products';
import { articles, type Article } from '../data/articles';

export type SearchResults = {
  products: Product[];
  articles: Article[];
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

export function searchSite(query: string, limit = 4): SearchResults {
  const q = normalize(query.trim());
  if (q.length < 2) return { products: [], articles: [] };

  const matchedProducts = products
    .filter(
      (p) =>
        normalize(p.name).includes(q) ||
        normalize(p.material).includes(q) ||
        normalize(p.category).includes(q),
    )
    .slice(0, limit);

  const matchedArticles = articles
    .filter(
      (a) =>
        normalize(a.title).includes(q) ||
        normalize(a.excerpt).includes(q) ||
        normalize(a.category).includes(q),
    )
    .slice(0, limit);

  return { products: matchedProducts, articles: matchedArticles };
}
