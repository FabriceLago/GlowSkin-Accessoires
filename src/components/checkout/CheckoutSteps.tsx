import { Check } from 'lucide-react';

const steps = [
  { n: 1, label: 'Coordonnées' },
  { n: 2, label: 'Livraison' },
  { n: 3, label: 'Paiement' },
];

export function CheckoutSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="mx-auto flex max-w-md items-center justify-center gap-2 px-6 py-8">
      {steps.map((step, i) => {
        const isDone = step.n < current;
        const isActive = step.n === current;
        return (
          <li key={step.n} className="flex flex-1 items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
                  isDone
                    ? 'bg-sauge text-brun'
                    : isActive
                      ? 'bg-brun text-ivoire'
                      : 'bg-sable text-brun/40'
                }`}
              >
                {isDone ? <Check size={13} strokeWidth={2} /> : step.n}
              </span>
              <span
                className={`whitespace-nowrap text-[11px] tracking-wide ${
                  isActive ? 'text-brun' : 'text-brun/40'
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span
                className={`mb-4 h-px flex-1 ${
                  isDone ? 'bg-sauge' : 'bg-sable'
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
