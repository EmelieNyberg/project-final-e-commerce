import React, { useState } from "react";
import { Header } from "../components/Header";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartStore } from "../stores/CartStore";
import styled from "styled-components";
import { DeliveryAndPaymentModal } from "../components/DeliveryAndPaymentModal";

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
    flex-shrink: 0;
  }
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
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #ff7bbc;
  }
`;

const QuantityNumber = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CrossButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: red;
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
  background-color: lightgray;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #ff7bbc;
    color: white;
  }
`;

export const ShoppingCart = () => {
  const { cartItems, updateQuantity } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header title="Shopping Cart" subtitle="Manage your items" />
      <ShoppingCartContainer>
        {cartItems.map((item) => (
          <CartWrapper key={`${item.id}-${item.size}`}>
            <a href={`/products/${item.id}`}>
              <ProductImg src={item.image?.url} alt={item.title} />
            </a>
            <ProductDetails>
              <StyledTitle>
                <a href={`/products/${item.id}`}>{item.title}</a>
              </StyledTitle>
              <p>Price: ${item.price}</p>
              <p>Size: {item.size}</p>
              <QuantityWrapper>
                <QuantityButton
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                >
                  <FaMinus />
                </QuantityButton>
                <QuantityNumber>{item.quantity}</QuantityNumber>
                <QuantityButton
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                >
                  <FaPlus />
                </QuantityButton>
              </QuantityWrapper>
            </ProductDetails>
            <ActionWrapper>
              <CrossButton
                onClick={() => updateQuantity(item.id, item.size, 0)}
              >
                <RxCross2 />
              </CrossButton>
              <TotalPrice>
                ${(item.price * item.quantity).toFixed(2)}
              </TotalPrice>
            </ActionWrapper>
          </CartWrapper>
        ))}
        <SummaryCart>
          <h3>Total:</h3>
          <h3>${totalPrice.toFixed(2)}</h3>
        </SummaryCart>
        <CheckoutButton onClick={handleToggleModal}>Proceed to Checkout</CheckoutButton>
        {isModalOpen && <DeliveryAndPaymentModal onClose={handleToggleModal} />}
      </ShoppingCartContainer>
    </>
  );
};
