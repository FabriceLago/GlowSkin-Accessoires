import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

const paragraphs = [
  'Nous ne croyons pas aux routines à dix étapes ni aux promesses de transformation. Nous croyons au geste répété, simple, tenu dans la durée — celui qui devient une habitude avant de devenir un résultat.',
  'Chaque objet que nous choisissons doit justifier sa place dans votre salle de bain : une matière honnête, un poids juste en main, une raison d’être utilisé chaque jour plutôt qu’oublié après trois semaines.',
  'GlowSkin n’est pas une marque de produits. C’est une collection d’accessoires pensés pour accompagner un rituel — le vôtre, à votre rythme, sans injonction.',
];

export function Manifesto() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-[620px] px-6 py-16 lg:py-24">
      <div ref={ref} className={className}>
        <div className="flex flex-col gap-6">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-center font-heading text-xl font-light leading-body tracking-title text-brun sm:text-2xl"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
