export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'commandes',
    title: 'Commandes & paiement',
    items: [
      {
        question: 'Comment suivre ma commande ?',
        answer:
          'Un e-mail de confirmation vous est envoyé dès la validation de votre commande, avec un lien de suivi. Vous pouvez aussi retrouver son statut depuis la page « Suivre ma commande ».',
      },
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer:
          'Carte bancaire, PayPal, Apple Pay, ainsi que le paiement en 3 fois sans frais dès 30€ d’achat.',
      },
      {
        question: 'Puis-je modifier ou annuler ma commande après validation ?',
        answer:
          'Contactez-nous le plus tôt possible : tant que la commande n’est pas expédiée, nous pouvons généralement la modifier ou l’annuler.',
      },
    ],
  },
  {
    id: 'livraison',
    title: 'Livraison',
    items: [
      {
        question: 'Quels sont les délais de livraison ?',
        answer:
          'Comptez 2 à 3 jours ouvrés en Colissimo, 2 à 4 jours en point relais, et 3 à 5 jours pour la livraison offerte dès 49€ d’achat.',
      },
      {
        question: 'Livrez-vous en dehors de la France métropolitaine ?',
        answer:
          'Pas encore. Nous livrons actuellement en France métropolitaine uniquement — l’Europe arrive bientôt.',
      },
      {
        question: 'Comment bénéficier de la livraison offerte ?',
        answer:
          'Elle est automatiquement proposée dès 49€ d’achat, à sélectionner à l’étape « Livraison » du tunnel de commande.',
      },
    ],
  },
  {
    id: 'produits',
    title: 'Produits & matières',
    items: [
      {
        question: 'Vos pierres sont-elles naturelles ?',
        answer:
          'Oui, chaque gua sha et rouleau est taillé dans une pierre naturelle (jade, quartz rose ou obsidienne), sans teinture ni traitement de surface.',
      },
      {
        question: 'Comment choisir entre jade, quartz rose et obsidienne ?',
        answer:
          'C’est surtout une question de sensation : le quartz rose garde la chaleur, le jade reste frais plus longtemps, l’obsidienne convient à un geste plus appuyé. Notre article « Choisir son gua sha selon sa peau » détaille chaque pierre.',
      },
      {
        question: 'Vos accessoires conviennent-ils à tous les types de peau ?',
        answer:
          'Nos objets sont pensés pour accompagner un geste, pas pour traiter une problématique de peau précise. En cas de doute, un avis dermatologique reste la meilleure référence.',
      },
    ],
  },
  {
    id: 'retours',
    title: 'Retours & remboursements',
    items: [
      {
        question: 'Quel est le délai pour retourner un produit ?',
        answer:
          'Vous disposez de 30 jours après réception pour nous retourner un produit non utilisé, dans son emballage d’origine.',
      },
      {
        question: 'Comment obtenir un remboursement ?',
        answer:
          'Une fois le retour reçu et vérifié, le remboursement est effectué sous 5 à 10 jours ouvrés sur votre moyen de paiement initial.',
      },
      {
        question: 'Les frais de retour sont-ils à ma charge ?',
        answer:
          'Le retour est gratuit en cas d’erreur de notre part. Pour un simple changement d’avis, les frais de retour restent à votre charge.',
      },
    ],
  },
  {
    id: 'compte',
    title: 'Compte & confidentialité',
    items: [
      {
        question: 'Dois-je créer un compte pour commander ?',
        answer:
          'Non, la commande en invité est possible. Un compte permet simplement de retrouver plus facilement votre historique de commandes.',
      },
      {
        question: 'Comment sont utilisées mes données personnelles ?',
        answer:
          'Uniquement pour traiter votre commande et, si vous l’acceptez, vous envoyer notre newsletter. Le détail complet figure dans notre politique de confidentialité.',
      },
      {
        question: 'Puis-je me désinscrire de la newsletter à tout moment ?',
        answer:
          'Oui, un lien de désinscription est présent en bas de chaque e-mail — l’effet est immédiat.',
      },
    ],
  },
];
