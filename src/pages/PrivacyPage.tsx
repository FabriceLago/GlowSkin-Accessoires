import { LegalLayout, LegalSection } from '../components/legal/LegalLayout';
import { useSeo } from '../hooks/useSeo';

export function PrivacyPage() {
  useSeo({
    title: 'Politique de confidentialité — GlowSkin Accessoires',
    description:
      'Comment GlowSkin Accessoires collecte, utilise et protège vos données personnelles.',
  });

  return (
    <LegalLayout
      title="Politique de confidentialité"
      updatedDate="1er août 2026"
    >
      <LegalSection title="1. Données collectées">
        <p>
          Nous collectons uniquement les données nécessaires au traitement
          de votre commande : identité, adresse postale, e-mail, téléphone.
          Aucune donnée bancaire n’est stockée sur nos serveurs — le
          paiement est traité par un prestataire tiers sécurisé.
        </p>
      </LegalSection>

      <LegalSection title="2. Finalités du traitement">
        <p>
          Vos données sont utilisées pour : traiter et livrer votre
          commande, répondre à vos demandes via le formulaire de contact,
          et — si vous y avez consenti — vous envoyer notre newsletter.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies">
        <p>
          Le site utilise des cookies strictement nécessaires à son
          fonctionnement (panier, préférences d’affichage) ainsi que, sous
          réserve de votre consentement, des cookies de mesure d’audience.
          Vous pouvez modifier vos préférences à tout moment via le bandeau
          de gestion des cookies.
        </p>
      </LegalSection>

      <LegalSection title="4. Durée de conservation">
        <p>
          Les données liées à une commande sont conservées 5 ans à des fins
          comptables et légales. Les données liées à la newsletter sont
          conservées jusqu’à votre désinscription.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinataires">
        <p>
          Vos données ne sont jamais vendues. Elles peuvent être transmises
          à nos prestataires techniques (hébergement, paiement, livraison)
          dans la seule mesure nécessaire à l’exécution de votre commande.
        </p>
      </LegalSection>

      <LegalSection title="6. Vos droits">
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de
          rectification, d’effacement et de portabilité de vos données,
          ainsi que d’un droit d’opposition. Pour exercer ces droits,
          écrivez-nous depuis la page Contact.
        </p>
      </LegalSection>

      <LegalSection title="7. Sécurité">
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          raisonnables pour protéger vos données contre tout accès non
          autorisé, perte ou divulgation.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
