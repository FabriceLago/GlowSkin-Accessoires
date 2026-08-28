import { useState } from 'react';
import { beforeAfter } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          Avant / Après une routine régulière
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-body text-brun/60">
          Un teint plus détendu et une peau apaisée, ressentis par nos
          clientes après plusieurs semaines de rituel. Le résultat dépend de
          chaque peau et de la régularité du geste — nos accessoires ne sont
          pas des dispositifs médicaux et ne traitent aucune pathologie.
        </p>
      </div>

      <div className="relative mt-10 aspect-[4/3] select-none overflow-hidden rounded-card">
        <img
          loading="lazy"
          src={beforeAfter.after}
          alt="Après plusieurs semaines de rituel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            loading="lazy"
            src={beforeAfter.before}
            alt="Avant de commencer le rituel"
            className="h-full w-full max-w-none object-cover"
            style={{ width: `${(100 / position) * 100}%` }}
          />
        </div>

        <div
          className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center bg-ivoire/80"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ivoire text-brun shadow-diffuse">
            <span className="text-xs">↔</span>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparer avant et après"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="absolute bottom-4 left-4 rounded-full bg-brun/60 px-3 py-1 text-xs text-ivoire">
          Avant
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-brun/60 px-3 py-1 text-xs text-ivoire">
          Après
        </span>
      </div>
    </section>
  );
}
