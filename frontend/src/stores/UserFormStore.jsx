// UserFormStore.jsx

import { create } from "zustand";

export const useUserFormStore = create((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
  },
  errorMessage: "",

  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),

  updateErrorMessage: (message) => set(() => ({ errorMessage: message })),

  resetForm: () =>
    set(() => ({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        acceptTerms: false,
      },
      errorMessage: "",
    })),
}));