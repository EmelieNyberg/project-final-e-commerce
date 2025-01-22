// UserStore.jsx

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null, // Initialt inget användarobjekt

      setUser: (user) => set({ user }), // Uppdatera användarens uppgifter

      clearUser: () => set({ user: null }), // Rensa användarens uppgifter
    }),
    {
      name: "user-storage", // Namn på nyckeln i localStorage
      partialize: (state) => ({ user: state.user }), // Spara bara användarens data
    }
  )
);