const items = [
  'Livraison offerte dès 49€',
  'Paiement 3x',
  'Retours 30 jours',
  'Matériaux naturels certifiés',
];

function MarqueeContent() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center whitespace-nowrap px-6 text-sm tracking-wide text-brun"
        >
          {item}
          <span className="ml-6 text-dore">·</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden border-y border-dore/20 bg-ivoire py-4">
      <div className="flex w-max animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
