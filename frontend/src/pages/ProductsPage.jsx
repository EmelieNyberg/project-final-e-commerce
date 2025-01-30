import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Filter } from "../components/Filter";
import styled from "styled-components";

const StyledProductPage = styled.section`
    padding: 30px;
`;

export const ProductsPage = () => {
    const [products, setProducts] = useState([]); // Alla produkter från API
    const [filteredProducts, setFilteredProducts] = useState([]); // För filtrerade produkter
    const [selectedCategories, setSelectedCategories] = useState([]); // För valda kategorier

    // Hämta produkter från API
    useEffect(() => {
        fetch("http://localhost:8080/products") // Ändra URL till din API-endpoint
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Spara alla produkter
                setFilteredProducts(data); // Visa alla produkter initialt
            })
            .catch((error) => console.error("Fel vid hämtning av produkter:", error));
    }, []);

    // Hantera kategorifilter
    const handleFilter = (categories) => {
        setSelectedCategories(categories); // Uppdatera valda kategorier

        if (categories.length === 0) {
            // Om inga kategorier är valda, visa alla produkter
            setFilteredProducts(products);
        } else {
            // Filtrera produkterna baserat på de valda kategorierna
            setFilteredProducts(
                products.filter((product) => categories.includes(product.category))
            );
        }
    };

    return (
        <>
            <Header title="Products" subtitle="Explore our product range" />
            <StyledProductPage>
                {/* Filter-knappar */}
                <Filter
                    categories={["Outerwear", "Dresses", "Accessories", "T-shirts", "Pants", "Sweaters"]}
                    onFilter={handleFilter}
                />
                {/* Produktkort med filtrerade produkter */}
                <ProductCard products={filteredProducts} />
            </StyledProductPage>
        </>
    );
};
