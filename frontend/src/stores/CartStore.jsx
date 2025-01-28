import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [], // Håller varukorgens produkter
            orderDetails: null, // Håller beställningsinformation

            // Lägg till produkt i varukorgen
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
                                image: product.image || { url: "https://via.placeholder.com/50" }, // Fallback-bild om image saknas
                            },
                        ],
                    };
                }),

            // Uppdatera produktens kvantitet
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

            // Spara orderinformation
            setOrderDetails: (order) => set({ orderDetails: order }),

            // Töm varukorgen
            clearCart: () => set({ cartItems: [] }),
        }),
        { name: "cart-storage" }
    )
);
