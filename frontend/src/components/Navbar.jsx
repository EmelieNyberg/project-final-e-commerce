import { ShoppingCartLink } from "./ShoppingCartLink";
import { MyAccountLink } from "./MyAccountLink";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Styling
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  font-family: ${({ theme }) => theme.fonts.Font2};

  @media (max-width: 768px) {
    padding: 20px;
  }
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
  align-items: flex-end;
  gap: 35px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 75px;
    right: 10px;
    background-color: white;
    padding: 25px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
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
  gap: 15px;
`;

const HamburgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.Font1};
`;

const CloseIcon = styled(RxCross2)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.Font1};
`;

// Navbar Component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referens för att spåra klick utanför menyn

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Effekt som lyssnar efter klick utanför menyn
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <NavbarWrapper>
      <Brand to="/">JollyKid</Brand>

      {/* Meny-länkar med referens */}
      <List ref={menuRef} isOpen={isMenuOpen}>
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

        {/* Hamburgermeny för små skärmar */}
        <HamburgerMenuWrapper onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </HamburgerMenuWrapper>
      </RightIconsWrapper>
    </NavbarWrapper>
  );
};
