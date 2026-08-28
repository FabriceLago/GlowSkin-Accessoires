import { Minus, Plus } from 'lucide-react';

export function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="inline-flex items-center gap-4 rounded-full border border-brun/15 px-3 py-2">
      <button
        type="button"
        aria-label="Diminuer la quantité"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="text-brun/60 transition-colors hover:text-brun"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-4 text-center text-sm text-brun">{value}</span>
      <button
        type="button"
        aria-label="Augmenter la quantité"
        onClick={() => onChange(Math.min(9, value + 1))}
        className="text-brun/60 transition-colors hover:text-brun"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
