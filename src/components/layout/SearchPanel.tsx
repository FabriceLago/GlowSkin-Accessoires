import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { searchSite } from '../../lib/search';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function SearchPanel({ onNavigate }: { onNavigate: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = searchSite(query);
  const hasQuery = query.trim().length >= 2;
  const hasResults = results.products.length > 0 || results.articles.length > 0;

  return (
    <div className="border-t border-dore/20 bg-ivoire px-6 py-4 lg:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3">
          <SearchIcon
            size={18}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-brun/40"
          />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={hasQuery}
            aria-controls="search-results"
            aria-autocomplete="list"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un accessoire, un rituel…"
            className="w-full bg-transparent font-body text-base text-brun placeholder:text-brun/40 focus:outline-none"
          />
        </div>

        {hasQuery && (
          <div id="search-results" className="mt-4 max-h-[60vh] overflow-y-auto">
            {!hasResults && (
              <p className="py-4 text-sm text-brun/50">
                Aucun résultat pour « {query} ».
              </p>
            )}

            {results.products.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-widest text-brun/40">
                  Produits
                </p>
                <ul className="mt-2 flex flex-col">
                  {results.products.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={`/produit/${product.id}`}
                        onClick={onNavigate}
                        className="flex items-center gap-3 rounded-lg py-2 transition-colors hover:bg-sable/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                      >
                        <img
                          src={product.resting}
                          alt=""
                          loading="lazy"
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="flex-1 text-sm text-brun">
                          {product.name}
                        </span>
                        <span className="text-sm text-terracotta-ink">
                          {formatPrice(product.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.articles.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-brun/40">
                  Journal
                </p>
                <ul className="mt-2 flex flex-col">
                  {results.articles.map((article) => (
                    <li key={article.id}>
                      <Link
                        to={`/journal/${article.slug}`}
                        onClick={onNavigate}
                        className="flex items-center gap-3 rounded-lg py-2 transition-colors hover:bg-sable/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                      >
                        <img
                          src={article.cover}
                          alt=""
                          loading="lazy"
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="flex-1 text-sm text-brun">
                          {article.title}
                        </span>
                        <span className="text-xs text-brun/45">
                          {article.category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
