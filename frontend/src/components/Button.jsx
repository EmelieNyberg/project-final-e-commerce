// Button.jsx

import styled from 'styled-components';
import { IoArrowForward } from 'react-icons/io5'; // Importera pilikonen från react-icons

// Skapa den stilade knappen
const StyledButton = styled.button`
  background-color: #c79ced; // Lila bakgrund
  color: white;               // Vit text
  padding: 12px 24px;         // Padding för att göra knappen större
  border: none;               // Ingen kant
  border-radius: 30px;        // Rundade hörn
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-size: 16px;            // Textstorlek
  font-weight: 500;          // Fetstil
  display: flex;              // Flexbox för att placera text och ikon
  align-items: center;        // Centrerar texten och ikonen vertikalt
  justify-content: center;    // Centrerar innehållet horisontellt
  cursor: pointer;           // Markera knappen som klickbar
  transition: background-color 0.3s ease; // Animerad övergång för bakgrundsfärg

  // Lägg till hover-effekt
  &:hover {
    background-color: #ff7bbc; // En något mörkare lila vid hover
  }

  // Lägg till ikon mellan texten och pilen
  svg {
    margin-left: 8px; // Mellanrum mellan text och pil
  }
`;

export const Button = ({ text }) => {
  return (
    <StyledButton>
      {text} <IoArrowForward />
    </StyledButton>
  );
};
