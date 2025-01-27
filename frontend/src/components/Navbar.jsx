import { ShoppingCartLink } from "./ShoppingCartLink";
import { MyAccountLink } from "./MyAccountLink";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Styling
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  font-family: ${({ theme }) => theme.fonts.Font2};
`;

const Brand = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 35px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: white;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px; /* Flyttar länkarna ner */
  }
`;

const ListItem = styled.li`
  display: inline;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Poppins", serif;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.BtnLinkActive};
  }
`;

const RightIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    position: relative;
    justify-content: flex-end;
  }
`;

const HamburgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const HamburgerIcon = styled(FaBars)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.Font1};
`;

const CloseIcon = styled(MdClose)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.Font1};
`;

// Navbar Component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <NavbarWrapper>
      <Brand to="/">JollyKid</Brand>

      <List isOpen={isMenuOpen}>
        <ListItem>
          <StyledNavLink to="/products" onClick={() => setIsMenuOpen(false)}>
            Products
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About us
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </StyledNavLink>
        </ListItem>
      </List>

      <RightIconsWrapper>
        <ShoppingCartLink />

        <MyAccountLink />

        <HamburgerMenuWrapper onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </HamburgerMenuWrapper>
      </RightIconsWrapper>
    </NavbarWrapper>
  );
};
