// Header.jsx

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components for styling the header
const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgb(255, 236, 250);
`;

const Title = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  color: black;
`;

const Subtitle = styled.p`
  font-family: "Poppins", serif;
  font-weight: 300;
  font-size: 16px;
  color: black;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
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
