import { materials } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function MaterialBlock({ material }: { material: (typeof materials)[number] }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="hover-zoom overflow-hidden rounded-card">
        <img
          loading="lazy"
          src={material.image}
          alt={material.name}
          className="aspect-square w-full object-cover"
        />
      </div>
      <h3 className="mt-4 font-heading text-lg font-normal text-brun">
        {material.name}
      </h3>
      <p className="mt-1 text-sm leading-body text-brun/60">
        {material.description}
      </p>
    </div>
  );
}

export function Materials() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="bg-ivoire">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div ref={ref} className={className}>
          <h2 className="font-heading text-3xl font-light tracking-title text-brun">
            Nos matières
          </h2>
          <p className="mt-3 max-w-md text-sm leading-body text-brun/60">
            Choisies pour leur origine naturelle, sans traitement inutile.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {materials.map((material) => (
            <MaterialBlock key={material.id} material={material} />
          ))}
        </div>
      </div>
    </section>
  );
}
