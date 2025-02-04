// ProductStore.jsx

// import create from 'zustand';

// export const useProductStore = create((set) => ({
//   products: [],
//   selectedCategory: null,

//   // Funktion för att sätta produkterna direkt
//   setProducts: (products) => set({ products }),

//   // Funktion för att sätta vald kategori
//   setSelectedCategory: (selectedCategory) => set({ selectedCategory }),

//   // Funktion som hämtar produkter baserat på vald kategori
//   fetchProducts: async (category) => {
//     const url = category
//       ? `http://localhost:8080/products?category=${category}`
//       : `http://localhost:8080/products`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       set({ products: data });
//     } catch (error) {
//       console.error("Failed fetching products:", error);
//     }
//   },
// }));