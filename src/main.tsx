import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { CartProvider } from './lib/CartContext';
import { WishlistProvider } from './lib/WishlistContext';
import { CheckoutProvider } from './lib/CheckoutContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <CheckoutProvider>
            <App />
          </CheckoutProvider>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </StrictMode>,
);
