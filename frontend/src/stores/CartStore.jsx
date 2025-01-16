// CartStore.jsx

import { create } from "zustand";

export const useCartStore = create((set) => ({
    cartItemCount: 0, // Initialvärde för antal produkter
    addCartItem: () => set((state) => ({ cartItemCount: state.cartItemCount + 1 })),
    removeCartItem: () => set((state) => ({ cartItemCount: Math.max(0, state.cartItemCount - 1) })), // Förhindrar negativa värden
    clearCart: () => set({ cartItemCount: 0 }), // Rensa kundvagnen
}));