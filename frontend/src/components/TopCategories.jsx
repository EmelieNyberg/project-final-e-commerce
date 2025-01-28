import styled from "styled-components";
import { Button } from "./Button";

const TopCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Vertikal layout för rubrik och kort */
  align-items: center; /* Centrera innehållet */
  padding: 20px;
`;

const TopCategoriesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 10px; /* Avstånd mellan rubrik och kort */
  text-align: center;
  color: ${({ theme }) => theme.colors.Font1};
`;

const TopCategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

const TopCategoriesCard = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 20px;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 100%; /* Anpassa bilden till kortets bredd */
  max-width: 267px; 
  margin-bottom: 15px; 
  // border-radius: 10px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

// Skapa ett kort som återanvänds
const Card = ({ imageSrc, link, buttonText }) => (
  <TopCategoriesCard>
    <StyledLink href={link} target="_blank" rel="noopener noreferrer">
      <StyledImage src={imageSrc} alt="Category" />
    </StyledLink>
    <Button text={buttonText} />
  </TopCategoriesCard>
);

export const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      {/* Rubrik ovanför korten */}
      <TopCategoriesTitle>Explore Our Top Categories</TopCategoriesTitle>

      {/* Wrapper för korten */}
      <TopCategoriesWrapper>
        <Card
          imageSrc="src/assets/toys-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Shop toys"
        />
        <Card
          imageSrc="src/assets/shoes-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Shop shoes"
        />
        <Card
          imageSrc="src/assets/clothes-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Shop clothes"
        />
        <Card
          imageSrc="src/assets/utensils-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Shop utensils"
        />
      </TopCategoriesWrapper>
    </TopCategoriesContainer>
  );
};
