import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Product } from '../../data/products';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function ProductCard({ product }: { product: Product }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="group relative">
        <Link
          to={`/produit/${product.id}`}
          aria-label={product.name}
          className="absolute inset-0 z-10"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-ivoire">
          <img
            loading="lazy"
            src={product.resting}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-600 ease-out group-hover:scale-103 group-hover:opacity-0"
          />
          <img
            loading="lazy"
            src={product.hover}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-103 object-cover opacity-0 transition-all duration-600 ease-out group-hover:opacity-100"
          />

          {!product.inStock && (
            <span className="absolute left-3 top-3 rounded-full bg-brun/70 px-3 py-1 text-[11px] tracking-wide text-ivoire">
              Épuisé
            </span>
          )}
          {product.isNew && product.inStock && (
            <span className="absolute left-3 top-3 rounded-full bg-sauge px-3 py-1 text-[11px] tracking-wide text-brun">
              Nouveau
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full p-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="relative z-20 w-full rounded-full bg-ivoire/95 py-2.5 text-xs font-medium tracking-wide text-brun shadow-diffuse transition-opacity hover:opacity-90"
            >
              Aperçu rapide
            </button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-medium uppercase tracking-widest text-sauge-ink">
            {product.material}
          </p>
          <h3 className="mt-1.5 text-sm text-brun">{product.name}</h3>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-medium text-terracotta-ink">
              {formatPrice(product.price)}
            </p>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  strokeWidth={1.5}
                  className={
                    i < Math.round(product.rating)
                      ? 'fill-dore text-dore'
                      : 'text-brun/20'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
