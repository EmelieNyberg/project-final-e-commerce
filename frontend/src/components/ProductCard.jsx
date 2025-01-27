import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Fyra kolumner på rad */

  max-width: 1200px;
  margin: auto;
  padding: 2% 0;


  

  /* För surfplattor */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Tre på rad för mindre skärmar */
  }

  /* För mobiler */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Två på rad för mobilvyer */
  }

  /* För riktigt små mobiler */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* En på rad för små mobiler */
  }

`;

const CardTextWrapper = styled.div`
  padding: 10px;
  text-align: left;
  cursor: pointer;

  img {
    width: 100%;
    /* height: 537px; */
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
            <p>${product.price}</p>
          </Link>
        </CardTextWrapper>
      ))}
    </ProductCardContainer>
  );
};
