import {
  categories,
  materialFilters,
  type Category,
  type MaterialFilter,
} from '../../data/products';

export const PRICE_MIN = 10;
export const PRICE_MAX = 90;

export type Filters = {
  categories: Category[];
  materials: MaterialFilter[];
  priceRange: [number, number];
  inStockOnly: boolean;
};

export const defaultFilters: Filters = {
  categories: [],
  materials: [],
  priceRange: [PRICE_MIN, PRICE_MAX],
  inStockOnly: false,
};

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-brun/80 hover:text-brun">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded-sm border-brun/30 text-sauge-ink accent-sauge focus:ring-sauge/50"
      />
      {label}
    </label>
  );
}

export function FiltersSidebar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
}) {
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.materials.length > 0 ||
    filters.inStockOnly ||
    filters.priceRange[0] !== PRICE_MIN ||
    filters.priceRange[1] !== PRICE_MAX;

  return (
    <aside className="lg:sticky lg:top-28 lg:h-fit">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium tracking-wide text-brun">
          Filtrer
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => onChange(defaultFilters)}
            className="text-xs text-terracotta-ink underline underline-offset-4"
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Catégorie */}
      <div className="mt-6 border-t border-dore/20 pt-6">
        <h3 className="text-xs font-medium uppercase tracking-widest text-brun/50">
          Catégorie
        </h3>
        <div className="mt-3 flex flex-col">
          {categories.map((cat) => (
            <CheckboxRow
              key={cat}
              label={cat}
              checked={filters.categories.includes(cat)}
              onChange={() =>
                onChange({
                  ...filters,
                  categories: toggle(filters.categories, cat),
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Matière */}
      <div className="mt-6 border-t border-dore/20 pt-6">
        <h3 className="text-xs font-medium uppercase tracking-widest text-brun/50">
          Matière
        </h3>
        <div className="mt-3 flex flex-col">
          {materialFilters.map((mat) => (
            <CheckboxRow
              key={mat}
              label={mat}
              checked={filters.materials.includes(mat)}
              onChange={() =>
                onChange({
                  ...filters,
                  materials: toggle(filters.materials, mat),
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Prix */}
      <div className="mt-6 border-t border-dore/20 pt-6">
        <h3 className="text-xs font-medium uppercase tracking-widest text-brun/50">
          Prix
        </h3>
        <div className="mt-4">
          <div className="relative h-1 rounded-full bg-sable">
            <div
              className="absolute h-1 rounded-full bg-sauge"
              style={{
                left: `${
                  ((filters.priceRange[0] - PRICE_MIN) /
                    (PRICE_MAX - PRICE_MIN)) *
                  100
                }%`,
                right: `${
                  100 -
                  ((filters.priceRange[1] - PRICE_MIN) /
                    (PRICE_MAX - PRICE_MIN)) *
                    100
                }%`,
              }}
            />
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={filters.priceRange[0]}
              aria-label="Prix minimum"
              onChange={(e) => {
                const value = Math.min(
                  Number(e.target.value),
                  filters.priceRange[1],
                );
                onChange({
                  ...filters,
                  priceRange: [value, filters.priceRange[1]],
                });
              }}
              className="range-thumb pointer-events-none absolute inset-x-0 -top-2 h-5 w-full appearance-none bg-transparent"
            />
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={filters.priceRange[1]}
              aria-label="Prix maximum"
              onChange={(e) => {
                const value = Math.max(
                  Number(e.target.value),
                  filters.priceRange[0],
                );
                onChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], value],
                });
              }}
              className="range-thumb pointer-events-none absolute inset-x-0 -top-2 h-5 w-full appearance-none bg-transparent"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-brun/60">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Disponibilité */}
      <div className="mt-6 border-t border-dore/20 pt-6">
        <h3 className="text-xs font-medium uppercase tracking-widest text-brun/50">
          Disponibilité
        </h3>
        <div className="mt-3">
          <CheckboxRow
            label="En stock uniquement"
            checked={filters.inStockOnly}
            onChange={() =>
              onChange({ ...filters, inStockOnly: !filters.inStockOnly })
            }
          />
        </div>
      </div>
    </aside>
  );
}
