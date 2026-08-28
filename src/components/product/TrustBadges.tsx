import { Truck, RotateCcw, Leaf } from 'lucide-react';

const badges = [
  { icon: Truck, label: 'Livraison offerte dès 49€' },
  { icon: RotateCcw, label: 'Retours sous 30 jours' },
  { icon: Leaf, label: 'Matériaux naturels certifiés' },
];

export function TrustBadges() {
  return (
    <ul className="grid grid-cols-3 gap-3 border-y border-dore/20 py-5">
      {badges.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex flex-col items-center gap-2 text-center"
        >
          <Icon size={18} strokeWidth={1.25} className="text-sauge-ink" />
          <span className="text-[11px] leading-tight text-brun/60">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
