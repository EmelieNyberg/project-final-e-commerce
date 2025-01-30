import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [], // Keeping all products in cart
      orderDetails: null, // Keeping all orderinformation

      // Add product in cart
      addToCart: (product) =>
        set((state) => {
          const existingProductIndex = state.cartItems.findIndex(
            (item) => item.id === product.id && item.size === product.size
          );
          if (existingProductIndex >= 0) {
            const updatedCart = [...state.cartItems];
            updatedCart[existingProductIndex].quantity += product.quantity;
            return { cartItems: updatedCart };
          }
          return {
            cartItems: [
              ...state.cartItems,
              {
                ...product,
                image: product.image || { url: "https://via.placeholder.com/50" }, // Fallback-image if image is missing
              },
            ],
          };
        }),

      // Update product quantity
      updateQuantity: (id, size, quantity) =>
        set((state) => {
          const updatedCart = state.cartItems
            .map((item) =>
              item.id === id && item.size === size
                ? { ...item, quantity }
                : item
            )
            .filter((item) => item.quantity > 0);
          return { cartItems: updatedCart };
        }),

      // Save orderinformation
      setOrderDetails: (order) => set({ orderDetails: order }),

      // Empty cart
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "cart-storage" }
  )
);
