import { editorialImage } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

const gestures = [
  {
    number: '01',
    title: 'Préparer',
    description:
      'Nettoyer la peau, respirer, poser les outils devant soi. Le rituel commence avant le premier geste.',
  },
  {
    number: '02',
    title: 'Sculpter',
    description:
      'Le gua sha ou le rouleau glisse le long des lignes du visage, sans forcer. La régularité prime sur la pression.',
  },
  {
    number: '03',
    title: 'Apaiser',
    description:
      'Quelques respirations, une brume fraîche, un moment de calme avant de reprendre la journée.',
  },
];

function GestureBlock({ gesture }: { gesture: (typeof gestures)[number] }) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="border-t border-dore/20 py-12 first:border-t-0 lg:py-16">
        <span className="font-heading text-sm text-terracotta-ink">
          {gesture.number}
        </span>
        <h3 className="mt-3 font-heading text-2xl font-light tracking-title text-brun">
          {gesture.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-body text-brun/70">
          {gesture.description}
        </p>
      </div>
    </div>
  );
}

export function RitualEditorial() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          Votre rituel en 3 gestes
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-[600px]">
          <div className="hover-zoom h-[420px] overflow-hidden rounded-card lg:h-full">
            <img
              loading="lazy"
              src={editorialImage}
              alt="Un geste de soin appliqué à la lumière du jour"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          {gestures.map((gesture) => (
            <GestureBlock key={gesture.number} gesture={gesture} />
          ))}
        </div>
      </div>
    </section>
  );
}
