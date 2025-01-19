import React from "react";
import styled from "styled-components";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

const DeliveryOption = styled.div`
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #ff7bbc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #c79ced;
  }
`;

export const DeliveryAndPaymentModal = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    const { error } = await stripe.confirmCardPayment("TEST_CLIENT_SECRET", {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error("Payment error:", error);
    } else {
      alert("Payment successful!");
      onClose();
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Choose Delivery Option</h3>
        <DeliveryOption>
          <input type="radio" id="pickup" name="delivery" />
          <label htmlFor="pickup">Pickup</label>
        </DeliveryOption>
        <DeliveryOption>
          <input type="radio" id="instabox" name="delivery" />
          <label htmlFor="instabox">Instabox</label>
        </DeliveryOption>
        <h3>Enter Payment Details</h3>
        <form onSubmit={handlePayment}>
          <CardElement />
          <Button type="submit">Pay Now</Button>
        </form>
        <Button onClick={onClose}>Cancel</Button>
      </ModalContent>
    </ModalOverlay>
  );
};
