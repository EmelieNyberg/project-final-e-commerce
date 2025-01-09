// Hero.jsx

import styled from 'styled-components';
import { Button } from './Button';
import cloudImage from "../assets/clouds-pattern.png";

const StyledHero = styled.section`
  background-color: rgb(255, 236, 250);                
  padding: 10px 20px;         
`;

const StyledHeroText = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 35px; 
`;

const StyledHeroParagraph = styled.p`
  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 18px; 
`;

export const Hero = () => {
  return (

    <StyledHero>
      <StyledHeroText>
        Everything Your Child Needs, Delivered to Your Door
      </StyledHeroText>
      <StyledHeroParagraph>
        Explore our collection of toys, clothing, and more. Carefully selected to keep your child entertained, safe, and happy.
      </StyledHeroParagraph>
      <Button />
      <img src={cloudImage} alt="A description of the image" />

    </StyledHero>
  );
};