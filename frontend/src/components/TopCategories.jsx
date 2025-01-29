import styled from "styled-components";
import { Button } from "./Button";

const TopCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Vertikal layout för rubrik och kort */
  align-items: center; /* Centrera innehållet */
  padding: 30px;
`;

const TopCategoriesTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.Font1};
`;

// const TopCategoriesWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;





const TopCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Fyra kolumner på rad */
  //max-width: 1200px;
  margin: auto;
  //padding: 2% 0;
  
  /* För mobiler */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Två på rad för mobilvyer */
  }

  /* För riktigt små mobiler */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* En på rad för små mobiler */
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
          buttonText="Pants"
        />
        <Card
          imageSrc="src/assets/shoes-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Sweaters"
        />
        <Card
          imageSrc="src/assets/clothes-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Dresses"
        />
        <Card
          imageSrc="src/assets/utensils-kids-414x414.png"
          link="https://www.google.com/"
          buttonText="Outerwear"
        />
      </TopCategoriesWrapper>
    </TopCategoriesContainer>
  );
};
