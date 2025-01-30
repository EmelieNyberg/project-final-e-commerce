// Hero.jsx

import styled from 'styled-components';
import { Button } from './Button';
import cloudImage from "../assets/clouds-pattern.png";
import childImage from "../assets/child-sitting-down.png";

const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.Header};  
`;

const StyledHero = styled.section`  
  display: flex; 
  padding: 30px 60px;

  /* For mobile phones */
  @media (max-width: 667px) {
    flex-direction: column;
    padding: 40px 20px 30px 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeroHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-weight: 700;
  font-size: 35px; 
  margin: 0;
`;

const HeroParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-weight: 300;
  font-size: 18px; 
  margin: 30px 0 40px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ChildImg = styled.img`
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  /* For mobile phones */
  @media (max-width: 667px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const CloudPattern = styled.img`
  width: 100%;
  display: block;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <StyledHero>
        <TextContainer>
          <HeroHeader>
            Everything Your Child Needs, Delivered to Your Door
          </HeroHeader>

          <HeroParagraph>
            Explore our collection of toys, clothing, and more. Carefully selected to keep your child entertained, safe, and happy.
          </HeroParagraph>

          <Button text="Shop now" route="/products" />
        </TextContainer>

        <ImageContainer>
          <ChildImg src={childImage} alt="Picture of toys" />
        </ImageContainer>
      </StyledHero>
      <CloudPattern src={cloudImage} alt="Cloud pattern" />
    </HeroContainer>
  );
};