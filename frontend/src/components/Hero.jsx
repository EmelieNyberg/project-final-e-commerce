// Hero.jsx

import styled from 'styled-components';
import { Button } from './Button';
import cloudImage from "../assets/clouds-pattern.png";
import toysImage from "../assets/baby-toys.png";

const HeroContainer = styled.section`
  background-color: rgb(255, 236, 250);  
`;

const StyledHero = styled.section`  
  display: flex; 
  padding: 20px;

  /* For mobile phones */
@media (max-width: 667px) {
  flex-direction: column;
}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeroHeader = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 35px; 
  margin: 0;
`;

const HeroParagraph = styled.p`
  font-family: "Poppins", serif;
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

const ToysImg = styled.img`
  min-width: 200px;

  /* For mobile phones */
@media (max-width: 667px) {
  width: 50%;
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

          <Button text="Shop Now" />
        </TextContainer>

        <ImageContainer>
          <ToysImg src={toysImage} alt="Picture of toys" />
        </ImageContainer>
      </StyledHero>
      <CloudPattern src={cloudImage} alt="Cloud pattern" />
    </HeroContainer>
  );
};