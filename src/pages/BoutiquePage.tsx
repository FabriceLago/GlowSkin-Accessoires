import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { BoutiqueHeader } from '../components/boutique/BoutiqueHeader';
import {
  FiltersSidebar,
  defaultFilters,
  type Filters,
} from '../components/boutique/FiltersSidebar';
import { SortDropdown, type SortOption } from '../components/boutique/SortDropdown';
import { ProductGrid } from '../components/boutique/ProductGrid';
import { Pagination } from '../components/boutique/Pagination';
import { useSeo } from '../hooks/useSeo';

const PAGE_SIZE = 9;

export function BoutiquePage() {
  useSeo({
    title: 'La boutique — GlowSkin Accessoires',
    description:
      'Douze accessoires de soin naturels choisis pour leur matière : gua sha, rouleaux de jade, brosses konjac, coffrets rituels et plus.',
  });

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [sort, setSort] = useState<SortOption>('nouveautes');
  const [page, setPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(p.category)
      )
        return false;
      if (
        filters.materials.length > 0 &&
        (!p.materialFilter || !filters.materials.includes(p.materialFilter))
      )
        return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1])
        return false;
      if (filters.inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (sort) {
      case 'prix-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'prix-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'popularite':
        return list.sort((a, b) => b.popularity - a.popularity);
      case 'nouveautes':
      default:
        return list.sort(
          (a, b) => Number(b.isNew) - Number(a.isNew) || b.popularity - a.popularity,
        );
    }
  }, [filtered, sort]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginated = sorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function updateFilters(next: Filters) {
    setFilters(next);
    setPage(1);
  }

  function updateSort(next: SortOption) {
    setSort(next);
    setPage(1);
  }

  return (
    <div>
      <BoutiqueHeader />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Sidebar desktop */}
          <div className="hidden lg:block">
            <FiltersSidebar filters={filters} onChange={updateFilters} />
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-sm text-brun lg:hidden"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filtrer
              </button>

              <p className="hidden text-sm text-brun/50 lg:block">
                {sorted.length} produit{sorted.length > 1 ? 's' : ''}
              </p>

              <SortDropdown value={sort} onChange={updateSort} />
            </div>

            <div className="mt-8">
              <ProductGrid products={paginated} />
            </div>

            <Pagination
              page={currentPage}
              pageCount={pageCount}
              onChange={setPage}
            />
          </div>
        </div>
      </div>

      {/* Panneau filtres mobile */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brun/30"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-xs overflow-y-auto bg-ivoire px-6 py-6 shadow-diffuse">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg text-brun">Filtrer</h2>
              <button
                type="button"
                aria-label="Fermer les filtres"
                onClick={() => setIsMobileFiltersOpen(false)}
                className="text-brun"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-4">
              <FiltersSidebar filters={filters} onChange={updateFilters} />
            </div>
            <button
              type="button"
              onClick={() => setIsMobileFiltersOpen(false)}
              className="mt-8 w-full rounded-full bg-brun py-3 text-sm font-medium text-ivoire"
            >
              Voir {sorted.length} produit{sorted.length > 1 ? 's' : ''}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
