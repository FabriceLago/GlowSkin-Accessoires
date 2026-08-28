import { Clock } from 'lucide-react';
import { methodSteps } from '../../data/rituelContent';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function StepRow({
  step,
  index,
  reversed,
}: {
  step: (typeof methodSteps)[number];
  index: number;
  reversed: boolean;
}) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16`}
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="hover-zoom aspect-[4/5] overflow-hidden rounded-card">
          <img
            loading="lazy"
            src={step.image}
            alt={step.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <span className="font-heading text-sm text-terracotta-ink">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-3 font-heading text-2xl font-light tracking-title text-brun sm:text-3xl">
          {step.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest text-sauge-ink">
          <Clock size={13} strokeWidth={1.5} />
          {step.duration}
        </div>
        <p className="mt-4 max-w-md text-sm leading-body text-brun/70">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function MethodSection() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="bg-ivoire">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div ref={ref} className={`${className} text-center`}>
          <h2 className="font-heading text-3xl font-light tracking-title text-brun">
            Notre méthode
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-body text-brun/60">
            Trois temps, toujours les mêmes, pour un rituel qui ne demande
            pas de réflexion.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 lg:gap-24">
          {methodSteps.map((step, i) => (
            <StepRow key={step.id} step={step} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
