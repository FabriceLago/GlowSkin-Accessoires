import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../lib/WishlistContext';

const navItems = [
  { label: 'Boutique', to: '/boutique' },
  { label: 'Le Rituel', to: '/le-rituel' },
  { label: 'Journal', to: '/journal' },
];

const secondaryItems = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Livraison & retours', to: '/livraison-retours' },
];

export function MobileMenu({
  onClose,
  onOpenCart,
}: {
  onClose: () => void;
  onOpenCart: () => void;
}) {
  const { count: wishlistCount } = useWishlist();

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-ivoire md:hidden"
    >
      <div className="flex h-20 items-center justify-between px-6">
        <Link
          to="/"
          onClick={onClose}
          className="font-heading text-2xl font-normal tracking-title text-brun"
        >
          GlowSkin
        </Link>
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="text-brun"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `font-heading text-4xl font-light tracking-title transition-colors ${
                isActive ? 'text-terracotta-ink' : 'text-brun'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-6 border-t border-dore/20 px-6 py-6">
        <Link
          to="/wishlist"
          onClick={onClose}
          className="flex items-center gap-2 text-sm text-brun"
        >
          <Heart size={18} strokeWidth={1.5} />
          Souhaits {wishlistCount > 0 && `(${wishlistCount})`}
        </Link>
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          className="flex items-center gap-2 text-sm text-brun"
        >
          <ShoppingBag size={18} strokeWidth={1.5} />
          Panier
        </button>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 px-6 pb-8 text-xs text-brun/50">
        {secondaryItems.map((item) => (
          <Link key={item.to} to={item.to} onClick={onClose} className="hover:text-brun">
            {item.label}
          </Link>
        ))}
      </div>
    </div>,
    document.body,
  );
}
