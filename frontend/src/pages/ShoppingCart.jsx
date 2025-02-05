import { useState } from "react";
import { Header } from "../components/Header";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartStore } from "../stores/CartStore";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 30px 0;
  font-family: ${({ theme }) => theme.fonts.Font2};
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

  &&:hover {
    filter: brightness(80%);
  }
`;

const ProductDetails = styled.div`
  margin-left: 16px;
`;

const StyledTitle = styled.h4`
  margin-top: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Font1};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
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
    color: ${({ theme }) => theme.colors.BtnLinkHover};
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
  color: ${({ theme }) => theme.colors.Font1};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
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
  background-color: ${({ theme }) => theme.colors.BtnDisabled};
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BtnLinkHover};
    color: ${({ theme }) => theme.colors.Font2};
  }
`;

export const ShoppingCart = () => {
  const { cartItems, updateQuantity } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Importing the Stripe-library and loading it with a public test key
  // from a business account at Stripe.com
  const stripePromise = loadStripe("pk_test_51Qjgfi08VDFOASl7772yGlzpdZoJuKmfDfGjuXczCpauS8FwNmQXJlrtOyDoXR7uWKQyh9mT3A6nVuFdsTjHdxNy00bD8RSZJE");

  // Function that handles the checkout-process with Stripe
  const handleCheckout = async () => {
    try {
      // Sending a POST request to backend-server to create
      // a checkout session
      const response = await fetch("https://jollykid-api.onrender.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Telling backend that the data is in JSON format
        },
        body: JSON.stringify({
          // Takes all object in the shopping cart and makes them into a 
          // list of ID and quantity - for Stripe
          items: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      // Awaiting the answere from Backend (a session ID), and when recieved, 
      // convert it to JSON
      const data = await response.json();

      // If server responds we get a sessionID from Stripe
      if (response.ok) {
        const stripe = await stripePromise;

        // Redirect user to Stripe:s Checkout page with session ID
        stripe.redirectToCheckout({ sessionId: data.id });

        // If response was NOT ok.
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
                  aria-label="Decrease quantity"
                  title="Decrease quantity"
                >
                  <FaMinus />
                </QuantityButton>
                <QuantityNumber>{item.quantity}</QuantityNumber>
                <QuantityButton
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                  aria-label="Increase quantity"
                  title="Increase quantity"
                >
                  <FaPlus />
                </QuantityButton>
              </QuantityWrapper>
            </ProductDetails>
            <ActionWrapper>
              <CrossButton
                onClick={() => updateQuantity(item.id, item.size, 0)}
                aria-label="Remove from cart"
                title="Remove from cart"
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
        <CheckoutButton onClick={handleCheckout} disabled={isLoading}>
          {isLoading ? "Processing..." : "Proceed to Checkout"}
        </CheckoutButton>
      </ShoppingCartContainer>
    </>
  );
};
