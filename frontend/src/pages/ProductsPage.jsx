// ProductPage.jsx

// import { useState, useEffect } from "react";
// import { Header } from "../components/Header";
// import { ProductCard } from "../components/ProductCard";
// import { Filter } from "../components/Filter";
// import styled from "styled-components";

// const StyledProductPage = styled.section`
//     padding: 30px;

//     /* For mobile screens */
//   @media (max-width: 768px) {
//     padding: 30px 0; 
//   }
// `;

// export const ProductsPage = () => {
//     const [products, setProducts] = useState([]); // All products from API
//     const [filteredProducts, setFilteredProducts] = useState([]); // For filtered products

//     // Fetch products from API
//     useEffect(() => {
//         fetch("http://localhost:8080/products")
//             .then((response) => response.json())
//             .then((data) => {
//                 setProducts(data); // Save all products
//                 setFilteredProducts(data); // Show all pruducts before user starts filtering
//             })
//             .catch((error) => console.error("Fel vid hämtning av produkter:", error));
//     }, []);

//     // Handle category filter
//     const handleFilter = (categories) => {

//         if (categories.length === 0) {
//             // If no categories ar selected, show all products
//             setFilteredProducts(products);
//         } else {
//             // Filter products based on selected category
//             setFilteredProducts(
//                 products.filter((product) => categories.includes(product.category))
//             );
//         }
//     };

//     return (
//         <>
//             <Header title="Products" subtitle="Explore our product range" />
//             <StyledProductPage>
//                 {/* Filter-buttons */}
//                 <Filter
//                     categories={["Outerwear", "Dresses", "Accessories", "T-shirts", "Pants", "Sweaters"]}
//                     onFilter={handleFilter}
//                 />
//                 {/* Produktcard with filtered products */}
//                 <ProductCard products={filteredProducts} />
//             </StyledProductPage>
//         </>
//     );
// };










import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Filter } from "../components/Filter";
import styled from "styled-components";

const StyledProductPage = styled.section`
  padding: 30px;

  /* For mobile screens */
  @media (max-width: 768px) {
    padding: 30px 0; 
  }
`;

export const ProductsPage = () => {
    // State för produkter och vald kategori
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Hämta produkter från API:et beroende på vald kategori
    useEffect(() => {
        const url = selectedCategory
            ? `http://localhost:8080/products?category=${selectedCategory}`
            : `http://localhost:8080/products`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, [selectedCategory]);

    return (
        <>
            <Header title="Products" subtitle="Explore our product range" />
            <StyledProductPage>
                <Filter
                    categories={["Outerwear", "Dresses", "Accessories", "T-shirts", "Pants", "Sweaters"]}
                    selectedCategory={selectedCategory}
                    onFilter={setSelectedCategory}
                />
                <ProductCard products={products} />
            </StyledProductPage>
        </>
    );
};
















// import { useEffect } from "react";
// import { Header } from "../components/Header";
// import { ProductCard } from "../components/ProductCard";
// import { Filter } from "../components/Filter";
// import styled from "styled-components";
// import { useProductStore } from "../stores/ProductStore";

// const StyledProductPage = styled.section`
//   padding: 30px;

//   /* For mobile screens */
//   @media (max-width: 768px) {
//     padding: 30px 0; 
//   }
// `;

// export const ProductsPage = () => {
//     // Hämta state och funktioner från Zustand-storen
//     const { products, selectedCategory, fetchProducts, setSelectedCategory } = useProductStore();

//     // Hämta produkter varje gång den valda kategorin ändras
//     useEffect(() => {
//         fetchProducts(selectedCategory);
//     }, [selectedCategory]);

//     return (
//         <>
//             <Header title="Products" subtitle="Explore our product range" />
//             <StyledProductPage>
//                 <Filter
//                     categories={["Outerwear", "Dresses", "Accessories", "T-shirts", "Pants", "Sweaters"]}
//                     selectedCategory={selectedCategory}
//                     onFilter={setSelectedCategory}
//                 />
//                 <ProductCard products={products} />
//             </StyledProductPage>
//         </>
//     );
// };