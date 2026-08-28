import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

const STORAGE_KEY = 'glowskin-wishlist';

type WishlistContextValue = {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  count: number;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

function readStoredIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'string') : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(() => readStoredIds());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // Stockage indisponible (navigation privée, quota atteint…) — la
      // wishlist reste fonctionnelle pour la session en cours.
    }
  }, [ids]);

  const toggle = useCallback((id: string) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has, count: ids.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx)
    throw new Error('useWishlist doit être utilisé dans un WishlistProvider');
  return ctx;
}
