import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const inputClass =
  'w-full rounded-lg border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none';
const labelClass = 'text-xs font-medium tracking-wide text-brun/60';

const coordinates = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'bonjour@glowskin-accessoires.fr',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '01 84 60 12 34',
  },
  {
    icon: MapPin,
    label: 'Atelier',
    value: '14 rue des Vertus, 75003 Paris',
  },
  {
    icon: Clock3,
    label: 'Délai de réponse',
    value: 'Sous 24 à 48h ouvrées',
  },
];

export function ContactPage() {
  useSeo({
    title: 'Contact — GlowSkin Accessoires',
    description:
      'Une question sur votre commande, un produit ou votre rituel ? Écrivez-nous, nous répondons sous 24 à 48h ouvrées.',
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-body text-brun/60">
          Une question, une suggestion, un souci avec votre commande ?
          Écrivez-nous.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_360px] lg:gap-16">
        {/* Formulaire */}
        <div>
          {submitted ? (
            <div className="rounded-card border border-dore/20 bg-ivoire p-8 text-center">
              <p className="font-heading text-xl font-light text-brun">
                Message envoyé
              </p>
              <p className="mt-2 text-sm text-brun/60">
                Merci, nous revenons vers vous sous 24 à 48h ouvrées.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`mt-1.5 ${inputClass}`}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={`mt-1.5 ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="subject">
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  placeholder="Commande, produit, presse…"
                  className={`mt-1.5 ${inputClass}`}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={`mt-1.5 ${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 self-start rounded-full bg-sauge px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
              >
                Envoyer le message
              </button>
            </form>
          )}
        </div>

        {/* Coordonnées */}
        <div className="flex flex-col gap-6">
          {coordinates.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-sauge-ink"
              />
              <div>
                <p className="text-xs uppercase tracking-widest text-brun/45">
                  {label}
                </p>
                <p className="mt-1 text-sm text-brun">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
