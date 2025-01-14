import styled from "styled-components";
import { products } from '../data/products';

const ProductCardContainer = styled.div`
display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: auto;
    padding: 2% 0;

      /* För surfplattor (mellan 768px och 1024px) */
      @media (min-width: 668px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

  /* För mobiler (under 768px) */
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* 1 kort */
  }
 
`;

const CardTextWrapper = styled.div`
  

  h3 {
    font-size: 16px;
    font-family: "Poppins", serif;
   
    font-weight: bold;
    margin: 5px 0; /* Avstånd mellan rubrik och annan text */
    color: #030303;
  }

  p {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
    margin: 0;
    padding: 3px;
  }

  img {
    width: 100%;

    object-fit: cover;
   
    
  }
`;

const SectionTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 10px; /* Avstånd mellan rubrik och kort */
  text-align: center;
  color: #333;
`;

export const ProductCard = () => {
  return (
    <>
      <SectionTitle>Popular right now</SectionTitle>
      <ProductCardContainer>
        {products.map((product, index) => (
          <CardTextWrapper key={index}>
            <img src={product.image} alt={`Image of ${product.description}`} />
            <h3>{product.brand}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </CardTextWrapper>
        ))}
      </ProductCardContainer>
    </>
  );
};