// import styled from 'styled-components';
// import { useState } from 'react';

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.selected ? "#ff7bbc" : "#c79ced")};
//   color: ${({ theme }) => theme.colors.Font2};
//   padding: 12px 24px;
//   border: none;
//   border-radius: 30px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.BtnLinkHover};
//   }
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center; 
//   align-items: center; 
//   gap: 10px;
//   flex-wrap: wrap;
//   margin: 20px auto; 
//   max-width: 800px; 

//   /* Mobile screen */
//   @media (max-width: 768px) {
//     padding: 10px; 
//   }
// `;

// export const Filter = ({ categories, onFilter }) => {
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleCategoryClick = (category) => {
//     if (selectedCategories.includes(category)) {
//       // Remove category if it is already selected
//       const updatedCategories = selectedCategories.filter((cat) => cat !== category);
//       setSelectedCategories(updatedCategories);
//       onFilter(updatedCategories);
//     } else {
//       // Add category if it is not selected
//       const updatedCategories = [...selectedCategories, category];
//       setSelectedCategories(updatedCategories);
//       onFilter(updatedCategories);
//     }
//   };

//   return (
//     <ButtonWrapper>
//       {categories.map((category) => (
//         <StyledButton
//           key={category}
//           selected={selectedCategories.includes(category)} // Mark as selected
//           onClick={() => handleCategoryClick(category)}
//         >
//           {category}
//         </StyledButton>
//       ))}
//     </ButtonWrapper>
//   );
// };













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
    if (selectedCategory === category) {
      // Om knappen redan är aktiv, ta bort filtret (visa alla produkter)
      onFilter(null);
    } else {
      // Annars, sätt vald kategori
      onFilter(category);
    }
  };

  return (
    <ButtonWrapper>
      {categories.map((category) => (
        <StyledButton
          key={category}
          selected={selectedCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </StyledButton>
      ))}
    </ButtonWrapper>
  );
};

