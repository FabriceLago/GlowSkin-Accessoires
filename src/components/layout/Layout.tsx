import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { CookieBanner } from './CookieBanner';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-sable">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <CookieBanner />
    </div>
  );
}
