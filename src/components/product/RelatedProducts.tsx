import type { Product } from '../../data/products';
import { ProductCard } from '../boutique/ProductCard';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function RelatedProducts({
  title,
  subtitle,
  products,
  columns = 3,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  columns?: 3 | 4;
}) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  const gridCols =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section>
      <div ref={ref} className={className}>
        <h2 className="font-heading text-2xl font-light tracking-title text-brun">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-md text-sm leading-body text-brun/60">
            {subtitle}
          </p>
        )}
      </div>

      <div className={`mt-8 grid grid-cols-1 gap-x-6 gap-y-10 ${gridCols}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
