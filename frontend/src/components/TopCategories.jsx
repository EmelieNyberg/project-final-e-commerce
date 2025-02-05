import styled from "styled-components";
import { Button } from "./Button";
import pantsImage from "../assets/pexels-cottonbro-4715330.jpg";
import sweatersImage from "../assets/IMG_0407.jpg";
import dressesImage from "../assets/IMG_0405.jpg";
import outerwearImage from "../assets/IMG_0406.jpg";

const TopCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 30px;

  /* Small phones  */
  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const TopCategoriesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.Font1};
`;

const TopCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  margin: auto;
  
  /* Mobile screens */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Smaller mobile screens */
  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TopCategoriesCard = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 10px;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 100%; 
  max-width: 267px; 
  margin-bottom: 15px; 
`;

// const StyledLink = styled.a`
//   text-decoration: none;
//   color: inherit;
// `;

const Card = ({ imageSrc, category }) => (
  <TopCategoriesCard>
    <StyledImage src={imageSrc} alt={category} />
    <Button text={category} route={`/products?category=${category}`} />
  </TopCategoriesCard>
);

export const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      <TopCategoriesTitle>Explore Our Top Categories</TopCategoriesTitle>

      <TopCategoriesWrapper>
        <Card
          imageSrc={pantsImage}
          category="Pants"
        />
        <Card
          imageSrc={sweatersImage}
          category="Sweaters"
        />
        <Card
          imageSrc={dressesImage}
          category="Dresses"
        />
        <Card
          imageSrc={outerwearImage}
          category="Outerwear"
        />
      </TopCategoriesWrapper>
    </TopCategoriesContainer>
  );
};
