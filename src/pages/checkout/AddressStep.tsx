import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { useCheckout, type Address } from '../../lib/CheckoutContext';

const inputClass =
  'w-full rounded-lg border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none';
const labelClass = 'text-xs font-medium tracking-wide text-brun/60';

export function AddressStep() {
  const { items } = useCart();
  const { address, setAddress } = useCheckout();
  const [form, setForm] = useState<Address>(address);
  const navigate = useNavigate();

  if (items.length === 0) {
    return <Navigate to="/panier" replace />;
  }

  function update<K extends keyof Address>(key: K, value: Address[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setAddress(form);
    navigate('/commande/livraison');
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-12 lg:py-16">
      <h1 className="font-heading text-2xl font-light tracking-title text-brun sm:text-3xl">
        Coordonnées et adresse
      </h1>
      <p className="mt-2 text-sm text-brun/60">
        Ces informations servent uniquement à préparer et livrer votre
        commande.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label className={labelClass} htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="vous@exemple.fr"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="firstName">
              Prénom
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={(e) => update('firstName', e.target.value)}
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">
              Nom
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={(e) => update('lastName', e.target.value)}
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="address">
            Adresse
          </label>
          <input
            id="address"
            type="text"
            required
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="Numéro et rue"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="addressComplement">
            Complément d’adresse (optionnel)
          </label>
          <input
            id="addressComplement"
            type="text"
            value={form.addressComplement}
            onChange={(e) => update('addressComplement', e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="Étage, code d’accès…"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[140px_1fr]">
          <div>
            <label className={labelClass} htmlFor="postalCode">
              Code postal
            </label>
            <input
              id="postalCode"
              type="text"
              required
              inputMode="numeric"
              value={form.postalCode}
              onChange={(e) => update('postalCode', e.target.value)}
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="city">
              Ville
            </label>
            <input
              id="city"
              type="text"
              required
              value={form.city}
              onChange={(e) => update('city', e.target.value)}
              className={`mt-1.5 ${inputClass}`}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={`mt-1.5 ${inputClass}`}
            placeholder="Pour vous prévenir en cas de souci de livraison"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-brun py-3.5 text-sm font-medium tracking-wide text-ivoire transition-opacity hover:opacity-90"
        >
          Continuer vers la livraison
        </button>
      </form>
    </div>
  );
}
