import { Link } from 'react-router-dom';
import { quote } from '../../data/rituelContent';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function QuoteBand() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="bg-sauge">
      <div
        ref={ref}
        className={`${className} mx-auto max-w-3xl px-6 py-20 text-center lg:py-28`}
      >
        <p className="font-heading text-2xl font-light leading-body tracking-title text-brun sm:text-3xl">
          « {quote.text} »
        </p>
        <p className="mt-5 text-sm text-brun/70">{quote.author}</p>

        <Link
          to="/boutique"
          className="mt-10 inline-block rounded-full bg-ivoire px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
        >
          Découvrir la boutique
        </Link>
      </div>
    </section>
  );
}
