// ShoppingCart.jsx

import { Header } from "../components/Header";
import { RxCross2 } from "react-icons/rx"; // Import cross icon
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 30px 0;
  font-family: "Poppins", serif;
`;

const CartWrapper = styled.div`
  display: flex;
  border-top: 1px solid black;
  padding: 20px 0;

  & > div:last-child {
    margin: 0;
    margin-left: auto;
    text-align: right;
    flex-shrink: 0; /* Prevent shrinking */
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductImg = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  margin-left: 16px;
`;

const StyledTitle = styled.h4`
  margin-top: 0;
`;

const QuantityWrapper = styled.div`
  display: flex;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #ff7bbc;
  }
`;

const QuantityNumber = styled.p`
  margin: 0 5px;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Skapa maximalt avstånd mellan barn */
  align-items: flex-end;
`;

const CrossButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #ff7bbc;
  }
`;

const TotalPrice = styled.h4`
  margin: 0;
`;

const SummaryCart = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
`;

const CheckoutButton = styled.button`
  background-color: lightgray; // Lila bakgrund
  padding: 12px 24px;         // Padding för att göra knappen större
  border: none;               // Ingen kant
  border-radius: 30px;        // Rundade hörn
  font-size: 16px;            // Textstorlek
  font-weight: bold;          // Fetstil             
  cursor: pointer;           // Markera knappen som klickbar
  transition: background-color 0.3s ease; // Animerad övergång för bakgrundsfärg
  width: 100%;

  // Lägg till hover-effekt
  &:hover {
    background-color: #ff7bbc; // En något mörkare lila vid hover
    color: white;
  }
`;

export const ShoppingCart = () => {
  return (
    <>
      <Header title="Shopping cart" subtitle="Shopping cart" />
      <ShoppingCartContainer>
        <Heading>
          <h3>PRODUCT</h3>
          <h3>TOTAL</h3>
        </Heading>
        <CartWrapper>
          <a href="/product/floral-dress">
            <ProductImg
              src="https://static.kappahl.com/cdn-cgi/image/quality=80,width=1696,format=auto/globalassets/productimages/408450_l.jpg?ref=C24E2850B4"
              alt="Description of the image"
            />
          </a>
          <ProductDetails>
            <StyledTitle><a href="/product/floral-dress">Floral dress</a></StyledTitle>
            <p>Price: $45.00</p>
            <p>Size: 92</p>
            <QuantityWrapper>
              <QuantityButton><FaMinus /></QuantityButton><QuantityNumber>1</QuantityNumber><QuantityButton><FaPlus />
              </QuantityButton>
            </QuantityWrapper>
          </ProductDetails>
          <ActionWrapper>
            <CrossButton><RxCross2 style={{ fontSize: "25px" }} /></CrossButton>
            <TotalPrice>$45.00</TotalPrice>
          </ActionWrapper>
        </CartWrapper>
        <SummaryCart>
          <h3>TOTAL PRICE</h3>
          <h3>$45.00</h3>
        </SummaryCart>
        <CheckoutButton>CHECKOUT</CheckoutButton>
      </ShoppingCartContainer>
    </>
  );
};