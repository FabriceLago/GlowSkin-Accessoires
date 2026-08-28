import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem } from './CartContext';

export type Address = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  addressComplement: string;
  postalCode: string;
  city: string;
  phone: string;
};

export type ShippingOptionId = 'colissimo' | 'point-relais' | 'offerte';

export type ShippingOption = {
  id: ShippingOptionId;
  label: string;
  detail: string;
  price: number;
};

export const shippingOptions: ShippingOption[] = [
  {
    id: 'colissimo',
    label: 'Colissimo',
    detail: 'Livré chez vous sous 2 à 3 jours ouvrés',
    price: 4.9,
  },
  {
    id: 'point-relais',
    label: 'Point relais',
    detail: 'À retirer sous 2 à 4 jours ouvrés',
    price: 3.5,
  },
  {
    id: 'offerte',
    label: 'Livraison offerte',
    detail: 'Dès 49€ d’achat — 3 à 5 jours ouvrés',
    price: 0,
  },
];

export type PaymentMethodId = 'cb' | 'paypal' | 'apple-pay' | '3x';

export type Order = {
  number: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: ShippingOption;
  total: number;
  address: Address;
  date: string;
};

const emptyAddress: Address = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  addressComplement: '',
  postalCode: '',
  city: '',
  phone: '',
};

type CheckoutContextValue = {
  address: Address;
  setAddress: (address: Address) => void;
  shippingOptionId: ShippingOptionId | null;
  setShippingOptionId: (id: ShippingOptionId) => void;
  paymentMethod: PaymentMethodId;
  setPaymentMethod: (method: PaymentMethodId) => void;
  lastOrder: Order | null;
  placeOrder: (input: {
    items: CartItem[];
    subtotal: number;
    discount: number;
    shipping: ShippingOption;
  }) => Order;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

function generateOrderNumber() {
  const suffix = Math.floor(100000 + Math.random() * 900000);
  return `GS-${suffix}`;
}

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<Address>(emptyAddress);
  const [shippingOptionId, setShippingOptionId] =
    useState<ShippingOptionId | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId>('cb');
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const placeOrder = useCallback(
    ({
      items,
      subtotal,
      discount,
      shipping,
    }: {
      items: CartItem[];
      subtotal: number;
      discount: number;
      shipping: ShippingOption;
    }) => {
      const order: Order = {
        number: generateOrderNumber(),
        items,
        subtotal,
        discount,
        shipping,
        total: subtotal - discount + shipping.price,
        address,
        date: new Date().toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };
      setLastOrder(order);
      return order;
    },
    [address],
  );

  const value: CheckoutContextValue = {
    address,
    setAddress,
    shippingOptionId,
    setShippingOptionId,
    paymentMethod,
    setPaymentMethod,
    lastOrder,
    placeOrder,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx)
    throw new Error('useCheckout doit être utilisé dans un CheckoutProvider');
  return ctx;
}
