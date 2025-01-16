import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 2% 0;


   /* Media query för mobilvy */
   @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Visa 2 produkter i varje rad */
  }
  
`;

const CardTextWrapper = styled.div`
  padding: 10px;
  text-align: left;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
   
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }
`;

export const ProductCard = ({ products = [] }) => {
  return (
    <ProductCardContainer>
      {products.map((product) => (
        <CardTextWrapper key={product.id}>
          <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={product.image?.url || "https://via.placeholder.com/200"}
              alt={product.title || "Product image"}
            />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </Link>
        </CardTextWrapper>
      ))}
    </ProductCardContainer>
  );
};
