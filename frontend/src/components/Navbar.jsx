// Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styled from "styled-components";
// import './Navbar.css';

import { HamburgerMenu } from "./HamburgerMenu";

// export const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="brand">
//         <h1>JollyKid</h1>
//       </Link>
//       <ul className="nav-links">
//         <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
//         <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
//         <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
//       </ul>
//       <ul className="icon-links">
//         <li><NavLink to="/login" activeClassName="active"><BsFillPersonFill /></NavLink></li>
//         <li><NavLink to="/shoppingcart" activeClassName="active"><PiShoppingCartSimpleBold /></NavLink></li>
//         <div className="hamburger-menu">
//           <HamburgerMenu />
//         </div>
//       </ul>
//     </nav>
//   );
// };


// Styled Components för Navbar
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

// Styled component för varumärket
const Brand = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-decoration: none; /* Lägger till textdekoration för att ta bort understrykning */
  color: black;

  &:hover {
    color: #ff7bbc;
  }
`;

// Styled component för listor
const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: ${(props) => (props.navLinks ? "35px" : "15px")};
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    display: ${(props) => (props.navLinks ? "none" : "flex")};
  }
`;

// Styled component för listobjekt (li)
const ListItem = styled.li`
  display: inline;
`;

// Styled component för länkar
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Poppins", serif;
  color: black;

  &:hover {
    color: #ff7bbc;
  }

  &.active {
    color: #ff7bbc;
  }
`;

// För ikonlänkar
const IconLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// För hamburger-menyn
const HamburgerMenuWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Brand to="/">
        <h1>JollyKid</h1>
      </Brand>
      <List navLinks>
        <ListItem>
          <StyledNavLink to="/products" activeClassName="active">
            Products
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/about" activeClassName="active">
            About us
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/contact" activeClassName="active">
            Contact
          </StyledNavLink>
        </ListItem>
      </List>
      <IconLinksWrapper>
        <ListItem>
          <StyledNavLink to="/login" activeClassName="active">
            <BsFillPersonFill style={{ fontSize: "20px" }} />
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/shoppingcart" activeClassName="active">
            <PiShoppingCartSimpleBold style={{ fontSize: "20px" }} />
          </StyledNavLink>
        </ListItem>
        <HamburgerMenuWrapper>
          <HamburgerMenu />
        </HamburgerMenuWrapper>
      </IconLinksWrapper>
    </NavbarWrapper>
  );
};