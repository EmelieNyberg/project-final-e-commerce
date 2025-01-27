// Header.jsx

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components for styling the header
const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.Header};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.Font1};
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.Font1};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
`;

// Define the dynamic header component
export const Header = ({ title, subtitle }) => {

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Subtitle>
        <HomeLink to="/">Home</HomeLink> / {subtitle}
      </Subtitle>
    </HeaderContainer>
  );
};
