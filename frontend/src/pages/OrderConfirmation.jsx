import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useCartStore } from "../stores/CartStore";

const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.Background};
  font-family: ${({ theme }) => theme.fonts.Font2};
  border-radius: 10px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.Font1};
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.Font1};
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.Font1};
    margin-bottom: 20px;
    max-width: 600px;
  }

  .back-button {
    background-color: ${({ theme }) => theme.colors.Btn1};
    color: ${({ theme }) => theme.colors.Font2};
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
      background-color: ${({ theme }) => theme.colors.BtnLinkHover};
    }
  }

  .order-details {
    margin: 20px 0px 20px 0px;
    padding: 15px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: left;
  }

  .order-details h2 {
    font-family: ${({ theme }) => theme.fonts.Font1};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.Font1};
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    font-size: 1rem;
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  ul li img {
    width: 200px;
    height: 200px;
    object-fit: cover;
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
        No confirmation email has been sent, as this isn't a real webshop—but we appreciate your enthusiasm! 😊
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
                  src={item.image?.url} // Make sure we collect URL from `image.url`
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent loop
                    e.target.src = "https://via.placeholder.com/50"; // Fallback-picture
                  }}
                />
                <strong>{item.title}</strong> - {item.quantity} x ${item.price.toFixed(2)}
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
