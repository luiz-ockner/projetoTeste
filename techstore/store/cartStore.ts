// import { create } from "zustand"; // Removido import duplicado
import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
};

interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setUser: (email: string | null) => void;
  user: string | null;
}


// Funções utilitárias para persistir e recuperar o usuário logado

const USER_KEY = 'techstore-user';
function getCurrentUser(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(USER_KEY);
}
function setCurrentUser(email: string | null) {
  if (typeof window === 'undefined') return;
  if (email) {
    localStorage.setItem(USER_KEY, email);
  } else {
    localStorage.removeItem(USER_KEY);
  }
}
function getCartForUser(email: string): Product[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(`techstore-cart-${email}`);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function setCartForUser(email: string, items: Product[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`techstore-cart-${email}`, JSON.stringify(items));
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  user: null,
  addToCart: (product) => {
    const user = get().user;
    if (!user) return;
    const newItems = [...get().items, product];
    set({ items: newItems });
    setCartForUser(user, newItems);
  },
  removeFromCart: (id) => {
    const user = get().user;
    if (!user) return;
    const newItems = get().items.filter((item) => item.id !== id);
    set({ items: newItems });
    setCartForUser(user, newItems);
  },
  clearCart: () => {
    const user = get().user;
    if (!user) return;
    set({ items: [] });
    setCartForUser(user, []);
  },
  setUser: (email: string | null) => {
    setCurrentUser(email);
    set({ user: email });
    if (email) {
      set({ items: getCartForUser(email) });
    } else {
      set({ items: [] });
    }
  },
}));
  