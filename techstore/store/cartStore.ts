import {create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
    items: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
    removeFromCart: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
}));
