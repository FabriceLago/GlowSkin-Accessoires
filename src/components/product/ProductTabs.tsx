import { useState } from 'react';

type Tab = 'description' | 'geste' | 'entretien' | 'livraison';

const tabLabels: Record<Tab, string> = {
  description: 'Description',
  geste: 'Le geste',
  entretien: 'Entretien',
  livraison: 'Livraison',
};

export function ProductTabs({
  description,
  gesture,
  care,
  shipping,
}: {
  description: string;
  gesture: string[];
  care: string;
  shipping: string;
}) {
  const [active, setActive] = useState<Tab>('description');

  return (
    <div>
      <div
        role="tablist"
        aria-label="Informations produit"
        className="flex gap-8 border-b border-dore/20"
      >
        {(Object.keys(tabLabels) as Tab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`relative pb-4 text-sm transition-colors ${
              active === tab ? 'text-brun' : 'text-brun/45 hover:text-brun/70'
            }`}
          >
            {tabLabels[tab]}
            {active === tab && (
              <span className="absolute inset-x-0 -bottom-px h-px bg-terracotta" />
            )}
          </button>
        ))}
      </div>

      <div className="max-w-2xl py-8">
        {active === 'description' && (
          <p className="text-sm leading-body text-brun/75">{description}</p>
        )}

        {active === 'geste' && (
          <ol className="space-y-3">
            {gesture.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-body text-brun/75">
                <span className="font-heading text-terracotta-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        )}

        {active === 'entretien' && (
          <p className="text-sm leading-body text-brun/75">{care}</p>
        )}

        {active === 'livraison' && (
          <p className="text-sm leading-body text-brun/75">{shipping}</p>
        )}
      </div>
    </div>
  );
}
