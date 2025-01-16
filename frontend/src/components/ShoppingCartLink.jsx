// ShoppingCartLink.jsx

import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styled from "styled-components";
import { useCartStore } from "../stores/CartStore";

// Wrapper för att placera både ikonen och badge
const CartWrapper = styled.div`
  position: relative;
  display: inline-block; // För att hålla både ikonen och badge på samma nivå
`;

// Stil för själva shoppingcart-ikonen
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #ff7bbc;
  }

  &.active {
    color: #ff7bbc;
  }
`;

// Badge som ligger ovanpå ikonen
const Badge = styled.div`
  position: absolute;
  top: -8px; /* Placerar badge ovanför ikonen */
  right: -8px; /* Placerar badge till höger på ikonen */
  background-color: #ff7bbc; /* Rosa bakgrund */
  color: white; /* Vit text */
  font-size: 12px; /* Sätt en liten storlek för siffran */
  font-family: "Poppins", serif;
  font-weight: 500;
  width: 20px; /* Bestämmer bredden på badge */
  height: 20px; /* Bestämmer höjden på badge */
  border-radius: 50%; /* Gör badge rund */
  display: flex;
  justify-content: center; /* Centrerar texten horisontellt */
  align-items: center; /* Centrerar texten vertikalt */
`;

export const ShoppingCartLink = () => {
  const cartItemCount = useCartStore((state) => state.cartItemCount);

  return (
    <CartWrapper>
      <StyledNavLink to="/shoppingcart" activeClassName="active">
        <PiShoppingCartSimpleBold style={{ fontSize: "25px" }} />
      </StyledNavLink>
      {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>} {/* Visa bara badge om det finns produkter */}
    </CartWrapper>
  );
};
