import { useState } from 'react';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          -10% sur votre première commande
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-body text-brun/60">
          Inscrivez-vous et recevez votre code de bienvenue, ainsi que le
          rituel dans votre boîte mail.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm text-sauge-ink">
            Merci, votre code de bienvenue arrive dans votre boîte mail.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="flex-1 rounded-full border border-brun/15 bg-ivoire px-5 py-3.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-terracotta px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
            >
              Profiter de l’offre
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
