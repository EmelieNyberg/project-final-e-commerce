import styled from 'styled-components';
import { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';

const StyledButton = styled.button`
  background-color: ${(props) => (props.selected ? "#ff7bbc" : "#c79ced")};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7bbc;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centrera horisontellt */
  align-items: center; /* Centrera vertikalt */
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px auto; /* Lägger till lite avstånd ovanför och nedanför */
  max-width: 800px; /* Begränsar bredden för att hålla knapparna snyggt centrerade */
`;

export const Filter = ({ categories, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      // Ta bort kategorin om den redan är vald
      const updatedCategories = selectedCategories.filter((cat) => cat !== category);
      setSelectedCategories(updatedCategories);
      onFilter(updatedCategories);
    } else {
      // Lägg till kategorin om den inte är vald
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      onFilter(updatedCategories);
    }
  };

  return (
    <ButtonWrapper>
      {categories.map((category) => (
        <StyledButton
          key={category}
          selected={selectedCategories.includes(category)} // Markera om vald
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </StyledButton>
      ))}
    </ButtonWrapper>
  );
};
