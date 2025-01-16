// ShoppingCart.jsx

import { Header } from "../components/Header";
import { RxCross2 } from "react-icons/rx"; // Import cross icon
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  max-width: 600px;
  margin: auto;
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
    color: #ff7bbc;; /* Valfri: Ändra färg vid hover */
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
          <ProductImg src="https://static.kappahl.com/cdn-cgi/image/quality=80,width=1696,format=auto/globalassets/productimages/408450_l.jpg?ref=C24E2850B4" alt="Description of the image" />
          <ProductDetails>
            <StyledTitle>Floral dress</StyledTitle>
            <p>Price: $45.00</p>
            <p>Size: 92</p>
            <QuantityWrapper>
              <QuantityButton><FaMinus /></QuantityButton><p>1</p><QuantityButton><FaPlus />
              </QuantityButton>
            </QuantityWrapper>
          </ProductDetails>
          <ActionWrapper>
            <CrossButton><RxCross2 style={{ fontSize: "25px" }} /></CrossButton>
            <h4>$45.00</h4>
          </ActionWrapper>
        </CartWrapper>
      </ShoppingCartContainer>
    </>
  );
};