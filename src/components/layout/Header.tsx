import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { useWishlist } from '../../lib/WishlistContext';
import { SearchPanel } from './SearchPanel';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { label: 'Boutique', to: '/boutique' },
  { label: 'Le Rituel', to: '/le-rituel' },
  { label: 'Journal', to: '/journal' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm tracking-wide transition-colors hover:text-terracotta-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta ${
    isActive ? 'text-terracotta-ink' : 'text-brun'
  }`;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-dore/20 bg-ivoire/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-2xl font-normal tracking-title text-brun focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
        >
          GlowSkin
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Icônes */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label={isSearchOpen ? 'Fermer la recherche' : 'Rechercher'}
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen((v) => !v)}
            className="rounded text-brun transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link
            to="/wishlist"
            aria-label={`Liste de souhaits${wishlistCount > 0 ? ` (${wishlistCount} article${wishlistCount > 1 ? 's' : ''})` : ''}`}
            className="relative rounded text-brun transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
          >
            <Heart size={20} strokeWidth={1.5} aria-hidden="true" />
            {wishlistCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sauge text-[10px] text-brun"
              >
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label={`Ouvrir le panier${itemCount > 0 ? ` (${itemCount} article${itemCount > 1 ? 's' : ''})` : ''}`}
            onClick={openCart}
            className="relative rounded text-brun transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
          >
            <ShoppingBag size={20} strokeWidth={1.5} aria-hidden="true" />
            {itemCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] text-brun"
              >
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded text-brun md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {isSearchOpen && <SearchPanel onNavigate={() => setIsSearchOpen(false)} />}

      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenCart={openCart}
        />
      )}
    </header>
  );
}
