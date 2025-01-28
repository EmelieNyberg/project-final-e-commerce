import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useCartStore } from "../stores/CartStore";

// Wrapper för att centrera innehållet
const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.Background};
  font-family: Arial, sans-serif;
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #000000;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #000000;
    margin-bottom: 20px;
  }

  .emoji {
    font-size: 2rem;
  }

  .back-button {
    background-color: #c79ced;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background-color: #ff7bbc;
    }
  }

  .order-details {
    margin: 20px 0px 20px 0px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: left;
  }

  .order-details h2 {
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    font-size: 1rem;
    color: #333333;
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  ul li img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const OrderConfirmation = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const setOrderDetails = useCartStore((state) => state.setOrderDetails);
  const orderDetails = useCartStore((state) => state.orderDetails);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
      setOrderDetails({
        items: cartItems,
        total,
        date: new Date().toISOString(),
      });
      clearCart();
    }
  }, [cartItems, clearCart, setOrderDetails]);

  return (
    <ConfirmationWrapper>
      <h1>Thank you for your order!</h1>
      <p>
        A confirmation of your order has NOT been sent to your email,
        <br />
        since this is not a real webshop! <span className="emoji">😉</span>
      </p>

      {orderDetails ? (
        <div className="order-details">
          <h2>Order Details</h2>
          <p>
            <strong>Order Date:</strong>{" "}
            {new Date(orderDetails.date).toLocaleString()}
          </p>
          <p>
            <strong>Total Amount:</strong> ${orderDetails.total.toFixed(2)}
          </p>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image?.url} // Säkerställer att vi hämtar URL från `image.url`
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null; // Förhindra loop
                    e.target.src = "https://via.placeholder.com/50"; // Fallback-bild
                  }}
                />
                {item.title} - {item.quantity} x ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading your order details...</p>
      )}

      <Link to="/" className="back-button">
        Keep shopping
      </Link>
    </ConfirmationWrapper>
  );
};
