import { Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CheckoutLayout } from './components/checkout/CheckoutLayout';
import { HomePage } from './pages/HomePage';
import { BoutiquePage } from './pages/BoutiquePage';
import { ProductPage } from './pages/ProductPage';
import { RituelPage } from './pages/RituelPage';
import { JournalPage } from './pages/JournalPage';
import { ArticlePage } from './pages/ArticlePage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AddressStep } from './pages/checkout/AddressStep';
import { ShippingStep } from './pages/checkout/ShippingStep';
import { PaymentStep } from './pages/checkout/PaymentStep';
import { ConfirmationPage } from './pages/checkout/ConfirmationPage';

function SiteLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function TunnelLayout() {
  return (
    <CheckoutLayout>
      <Outlet />
    </CheckoutLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/boutique" element={<BoutiquePage />} />
        <Route path="/produit/:id" element={<ProductPage />} />
        <Route path="/le-rituel" element={<RituelPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<ArticlePage />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/livraison-retours" element={<ShippingReturnsPage />} />
        <Route path="/cgv" element={<TermsPage />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<TunnelLayout />}>
        <Route path="/commande" element={<AddressStep />} />
        <Route path="/commande/livraison" element={<ShippingStep />} />
        <Route path="/commande/paiement" element={<PaymentStep />} />
        <Route path="/commande/confirmation" element={<ConfirmationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
