import { Link } from 'react-router-dom';
import { faqCategories } from '../data/faq';
import { FaqAccordion } from '../components/faq/FaqAccordion';
import { useScrollFadeUp } from '../hooks/useScrollFadeUp';
import { useSeo } from '../hooks/useSeo';

export function FaqPage() {
  useSeo({
    title: 'Questions fréquentes — GlowSkin Accessoires',
    description:
      'Commandes, livraison, produits, retours, compte : toutes les réponses à vos questions sur GlowSkin Accessoires.',
  });

  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <div ref={ref} className={`${className} text-center`}>
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          Questions fréquentes
        </h1>
        <p className="mt-4 text-sm leading-body text-brun/60">
          Tout ce qu’il faut savoir avant, pendant et après votre commande.
        </p>
      </div>

      {/* Navigation rapide */}
      <nav
        aria-label="Catégories de questions"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {faqCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-brun/15 px-4 py-2 text-xs text-brun transition-colors hover:border-terracotta hover:text-terracotta-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="mt-14 flex flex-col gap-14">
        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <h2 className="font-heading text-xl font-normal text-brun">
              {category.title}
            </h2>
            <div className="mt-2">
              <FaqAccordion category={category} />
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-card border border-dore/20 bg-ivoire p-8 text-center">
        <h2 className="font-heading text-lg font-normal text-brun">
          Une autre question ?
        </h2>
        <p className="mt-2 text-sm text-brun/60">
          Notre équipe vous répond sous 24 à 48h ouvrées.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-full bg-brun px-7 py-3 text-sm font-medium tracking-wide text-ivoire transition-opacity hover:opacity-90"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
