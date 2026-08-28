import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { freeShippingThreshold } from '../design/tokens';

export const PROMO_CODE = 'RITUEL10';
export const PROMO_RATE = 0.1;

export type CartItem = {
  lineId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variantLabel?: string;
};

type AddItemInput = {
  productId: string;
  name: string;
  price: number;
  image: string;
  variantLabel?: string;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: AddItemInput, quantity?: number) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  amountToFreeShipping: number;
  freeShippingProgress: number; // 0 à 100
  hasFreeShipping: boolean;
  promoCode: string | null;
  applyPromoCode: (code: string) => boolean;
  discount: number;
  discountedSubtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function makeLineId(productId: string, variantLabel?: string) {
  return variantLabel ? `${productId}::${variantLabel}` : productId;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((item: AddItemInput, quantity = 1) => {
    const lineId = makeLineId(item.productId, item.variantLabel);
    setItems((prev) => {
      const existing = prev.find((i) => i.lineId === lineId);
      if (existing) {
        return prev.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { ...item, lineId, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId: string) => {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.lineId !== lineId)
        : prev.map((i) => (i.lineId === lineId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setPromoCode(null);
  }, []);

  const [promoCode, setPromoCode] = useState<string | null>(null);

  const applyPromoCode = useCallback((code: string) => {
    const isValid = code.trim().toUpperCase() === PROMO_CODE;
    setPromoCode(isValid ? PROMO_CODE : null);
    return isValid;
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const discount = promoCode ? subtotal * PROMO_RATE : 0;
  const discountedSubtotal = subtotal - discount;

  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100,
  );
  const hasFreeShipping = subtotal >= freeShippingThreshold;

  const value: CartContextValue = {
    items,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    itemCount,
    freeShippingThreshold,
    amountToFreeShipping,
    freeShippingProgress,
    hasFreeShipping,
    promoCode,
    applyPromoCode,
    discount,
    discountedSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart doit être utilisé dans un CartProvider');
  return ctx;
}
