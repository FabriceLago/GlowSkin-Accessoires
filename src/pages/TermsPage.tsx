import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from '../components/legal/LegalLayout';
import { useSeo } from '../hooks/useSeo';

export function TermsPage() {
  useSeo({
    title: 'Conditions générales de vente — GlowSkin Accessoires',
    description:
      'Conditions générales de vente applicables aux commandes passées sur GlowSkin Accessoires.',
  });

  return (
    <LegalLayout title="Conditions générales de vente" updatedDate="1er août 2026">
      <LegalSection title="1. Objet">
        <p>
          Les présentes conditions générales régissent les ventes effectuées
          sur le site GlowSkin Accessoires entre GlowSkin Accessoires,
          vendeur, et toute personne physique effectuant un achat, ci-après
          « la cliente ».
        </p>
      </LegalSection>

      <LegalSection title="2. Produits et prix">
        <p>
          Les produits proposés sont ceux figurant sur le site au jour de la
          consultation, dans la limite des stocks disponibles. Les prix sont
          indiqués en euros, toutes taxes comprises, hors frais de
          livraison qui sont précisés avant la validation de la commande.
        </p>
      </LegalSection>

      <LegalSection title="3. Commande">
        <p>
          La commande est validée après confirmation du panier, saisie des
          coordonnées de livraison et acceptation du paiement. Un e-mail de
          confirmation est envoyé à la cliente à l’issue de ce processus.
        </p>
      </LegalSection>

      <LegalSection title="4. Paiement">
        <p>
          Le paiement s’effectue en ligne par carte bancaire, PayPal, Apple
          Pay, ou en 3 fois sans frais dès 30€ d’achat. La commande n’est
          traitée qu’après validation effective du paiement.
        </p>
      </LegalSection>

      <LegalSection title="5. Livraison">
        <p>
          Les délais de livraison sont indiqués sur la page{' '}
          <Link
            to="/livraison-retours"
            className="text-terracotta-ink underline underline-offset-4"
          >
            Livraison & retours
          </Link>
          . GlowSkin Accessoires ne saurait être tenue responsable de retards
          imputables au transporteur.
        </p>
      </LegalSection>

      <LegalSection title="6. Droit de rétractation">
        <p>
          Conformément à la législation en vigueur, la cliente dispose d’un
          délai de 14 jours à compter de la réception de sa commande pour
          exercer son droit de rétractation, sans avoir à justifier de
          motif. Les produits doivent être retournés non utilisés, dans
          leur emballage d’origine.
        </p>
      </LegalSection>

      <LegalSection title="7. Garanties">
        <p>
          Tous les produits bénéficient de la garantie légale de conformité
          et de la garantie contre les vices cachés, dans les conditions
          prévues par le Code de la consommation et le Code civil.
        </p>
      </LegalSection>

      <LegalSection title="8. Données personnelles">
        <p>
          Le traitement des données personnelles est détaillé dans notre{' '}
          <Link
            to="/politique-de-confidentialite"
            className="text-terracotta-ink underline underline-offset-4"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Litiges">
        <p>
          Les présentes conditions sont soumises au droit français. En cas
          de litige, une solution amiable sera recherchée avant toute action
          judiciaire. À défaut, les tribunaux français seront seuls
          compétents.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
