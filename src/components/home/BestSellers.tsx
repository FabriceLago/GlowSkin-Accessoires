import { Star } from 'lucide-react';
import { bestSellers } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

function ProductCard({ product }: { product: (typeof bestSellers)[number] }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="group cursor-pointer">
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
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                strokeWidth={1.5}
                className={
                  i < Math.round(product.rating)
                    ? 'fill-dore text-dore'
                    : 'text-brun/20'
                }
              />
            ))}
            <span className="ml-1 text-xs text-brun/50">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <h3 className="mt-2 text-sm text-brun">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-terracotta-ink">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BestSellers() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          Les essentiels du rituel
        </h2>
        <p className="mt-3 max-w-md text-sm leading-body text-brun/60">
          Sélectionnés pour leur matière, leur geste et leur constance dans
          le temps.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
