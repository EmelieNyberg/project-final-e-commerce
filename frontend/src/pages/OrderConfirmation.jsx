import { Link } from "react-router-dom";
import styled from "styled-components";

// Wrapper för att centrera innehållet
const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
  border-radius: 10px
  border-color: black;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }

  .emoji {
    font-size: 2rem;
  }

  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const OrderConfirmation = () => {
  return (
    <ConfirmationWrapper>
      <h1>Thank you for your order!</h1>
      <p>
        A confirmation of your order has NOT been sent to your email,
        <br />
        since this is not a real webshop! <span className="emoji">😉</span>
      </p>
      <Link to="/" className="back-button">
        Back to homepage
      </Link>
    </ConfirmationWrapper>
  );
};


