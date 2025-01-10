// Banner.jsx

import styled from 'styled-components';

const StyledBanner = styled.section`
  background-color: #c79ced;  
  color: white;               
  padding: 10px 20px;         
  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 14px; 
`;

const StyledBannerText = styled.p`
  margin: 0;
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <StyledBannerText>
        Free shipping on all orders over $50.
      </StyledBannerText>
    </StyledBanner>
  );
};