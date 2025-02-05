// Filter.jsx

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.selected ? "#ff7bbc" : "#c79ced")};
  color: ${({ theme }) => theme.colors.Font2};
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px auto; 
  max-width: 800px; 

  /* Mobile screen */
  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export const Filter = ({ categories, selectedCategory, onFilter }) => {
  const handleCategoryClick = (category) => {
    if (selectedCategory === category.toLowerCase()) {
      // If button is already active, remove filter (show all products)
      onFilter(null);
    } else {
      // Otherwise, show selected category
      onFilter(category);
    }
  };

  return (
    <ButtonWrapper>
      {categories.map((category) => (
        <StyledButton
          key={category}
          selected={selectedCategory === category.toLowerCase()}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </StyledButton>
      ))}
    </ButtonWrapper>
  );
};

