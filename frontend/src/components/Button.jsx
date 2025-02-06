// Button.jsx

import styled from 'styled-components';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.Btn1}; 
  color: ${({ theme }) => theme.colors.Font2};
  text-decoration: none;
  padding: 12px 24px;         
  border: none;               
  border-radius: 30px;        
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-size: 16px;            
  font-weight: 500;          
  display: flex;              
  align-items: center;        
  justify-content: center;    
  cursor: pointer;           
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.BtnLinkHover}; 
  }

  svg {
    margin-left: 8px; // gap between text and arrow-icon
  }
`;

export const Button = ({ text, route }) => {
  return (
    <StyledButton to={route}>
      {text} <IoArrowForward />
    </StyledButton>
  );
};
