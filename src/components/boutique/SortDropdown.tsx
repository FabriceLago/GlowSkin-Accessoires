import { ChevronDown } from 'lucide-react';

export type SortOption = 'nouveautes' | 'prix-asc' | 'prix-desc' | 'popularite';

const options: { value: SortOption; label: string }[] = [
  { value: 'nouveautes', label: 'Nouveautés' },
  { value: 'popularite', label: 'Popularité' },
  { value: 'prix-asc', label: 'Prix croissant' },
  { value: 'prix-desc', label: 'Prix décroissant' },
];

export function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        aria-label="Trier les produits"
        className="cursor-pointer appearance-none rounded-full border border-brun/15 bg-ivoire py-2 pl-4 pr-9 text-sm text-brun focus:border-terracotta focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            Trier : {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        strokeWidth={1.5}
        className="pointer-events-none absolute right-3 text-brun/50"
      />
    </div>
  );
}
