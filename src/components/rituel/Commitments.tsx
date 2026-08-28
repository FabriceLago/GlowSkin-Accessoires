import { Leaf, Ban, Factory, Package } from 'lucide-react';
import { commitments } from '../../data/rituelContent';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

const icons = {
  matieres: Leaf,
  plastique: Ban,
  fabrication: Factory,
  emballage: Package,
};

export function Commitments() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={`${className} text-center`}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          Nos engagements
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((item) => {
          const Icon = icons[item.id as keyof typeof icons];
          return (
            <div key={item.id} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-dore/30">
                <Icon size={20} strokeWidth={1.25} className="text-sauge-ink" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-normal text-brun">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-body text-brun/60">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
