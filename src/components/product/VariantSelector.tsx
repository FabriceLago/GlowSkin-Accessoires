import { Check } from 'lucide-react';
import type { Variant } from '../../data/products';

export function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: {
  variants: Variant[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const selected = variants.find((v) => v.id === selectedId) ?? variants[0];

  return (
    <div>
      <p className="text-sm text-brun/70">
        Matière : <span className="text-brun">{selected.label}</span>
      </p>
      <div className="mt-3 flex items-center gap-3">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedId;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelect(variant.id)}
              aria-label={variant.label}
              aria-pressed={isSelected}
              title={variant.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-offset-2 ring-offset-sable transition-all ${
                isSelected ? 'ring-brun' : 'ring-transparent hover:ring-brun/30'
              }`}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border border-brun/10"
                style={{ backgroundColor: variant.swatch }}
              >
                {isSelected && (
                  <Check
                    size={14}
                    strokeWidth={2}
                    className="text-ivoire mix-blend-difference"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
