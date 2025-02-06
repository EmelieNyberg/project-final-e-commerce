// UserStore.jsx

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null, // User starts with null

      setUser: (user) => set({ user }), // Update user input

      clearUser: () => set({ user: null }), // Clean user input
    }),
    {
      name: "user-storage", // Key name in localStorage
      partialize: (state) => ({ user: state.user }), // Save only the users data
    }
  )
);