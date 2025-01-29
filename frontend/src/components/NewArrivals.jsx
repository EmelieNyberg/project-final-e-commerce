// NewArrivals.jsx

import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.Background};
  padding: 30px;
`;

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.Font1};
`;

export const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/products/latest-products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledSection>
      <StyledHeading>Explore New Arrivals</StyledHeading>
      <ProductCard products={products} />
    </StyledSection>
  );
};