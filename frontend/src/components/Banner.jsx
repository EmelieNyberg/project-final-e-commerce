// Banner.jsx

import styled from 'styled-components';

const StyledBanner = styled.section`
  background-color: ${({ theme }) => theme.colors.Banner};  
  color: ${({ theme }) => theme.colors.Font2};               
  padding: 10px 60px;         
  font-family: ${({ theme }) => theme.fonts.Font2};
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