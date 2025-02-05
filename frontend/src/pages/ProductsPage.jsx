// ProductPage.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Filter } from "../components/Filter";
import styled from "styled-components";

const StyledProductPage = styled.section`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category"); // Read category from URL

  // Fetch products from API, depending on selected category
  useEffect(() => {
    const url = selectedCategory
      ? `https://jollykid-api.onrender.com/products?category=${selectedCategory}`
      : `https://jollykid-api.onrender.com/products`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  // Uppdate URL when user select category
  const handleFilterChange = (category) => {
    if (category) {
      setSearchParams({ category: category.toLowerCase() }); // Set query-param
    } else {
      setSearchParams({}); // Remove query-param
    }
  };

  return (
    <>
      <Header title="Products" subtitle="Explore our product range" />
      <StyledProductPage>
        <Filter
          categories={["Outerwear", "Dresses", "Accessories", "T-shirts", "Pants", "Sweaters"]}
          selectedCategory={selectedCategory}
          onFilter={handleFilterChange} // Update the URL with handleFilterChange
        />
        <ProductCard products={products} />
      </StyledProductPage>
    </>
  );
};
