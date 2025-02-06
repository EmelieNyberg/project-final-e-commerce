import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styled from "styled-components";
import { useCartStore } from "../stores/CartStore";

const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
`;

// Badge som ligger ovanpå ikonen
const Badge = styled.div`
  position: absolute;
  top: -8px; /* Placerar badge ovanför ikonen */
  right: -8px; /* Placerar badge till höger på ikonen */
  background-color: ${({ theme }) => theme.colors.BtnLinkHover}; /* Rosa bakgrund */
  color: ${({ theme }) => theme.colors.Font2}; /* Vit text */
  font-size: 12px; /* Sätt en liten storlek för siffran */
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-weight: 500;
  width: 20px; /* Bestämmer bredden på badge */
  height: 20px; /* Bestämmer höjden på badge */
  border-radius: 50%; /* Gör badge rund */
  display: flex;
  justify-content: center; /* Centrerar texten horisontellt */
  align-items: center; /* Centrerar texten vertikalt */
`;

export const ShoppingCartLink = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  // Räkna det totala antalet produkter i varukorgen
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartWrapper>
      <StyledNavLink
        to="/shoppingcart"
        activeClassName="active"
        aria-label="shoppingcart"
        title="shoppingcart"
      >
        <PiShoppingCartSimpleBold style={{ fontSize: "25px" }} />
      </StyledNavLink>
      {totalQuantity > 0 && <Badge>{totalQuantity}</Badge>} {/* Visa bara badge om det finns produkter */}
    </CartWrapper>
  );
};
