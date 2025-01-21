// import { useCartStore } from "../stores/CartStore";
// import styled from "styled-components";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// const CheckoutWrapper = styled.div`
//   max-width: 800px;
//   margin: auto;
//   padding: 20px;
//   font-family: "Poppins", serif;
// `;

// const Section = styled.div`
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ddd;
//   padding-bottom: 20px;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 15px;
//   background-color: #ff7bbc;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 18px;
//   cursor: pointer;

//   &:hover {
//     background-color: #c79ced;
//   }
// `;

// const FormWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const cart = useCartStore((state) => state.cart);
//     const totalPrice = useCartStore((state) => state.totalPrice);

//     const handlePayment = async (e) => {
//         e.preventDefault();
//         if (!stripe || !elements) return;

//         const { error, paymentIntent } = await stripe.confirmCardPayment("TEST_CLIENT_SECRET", {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//             },
//         });

//         if (error) {
//             console.error(error);
//         } else if (paymentIntent.status === "succeeded") {
//             alert("Payment successful!");
//         }
//     };

//     return (
//         <form onSubmit={handlePayment}>
//             <FormWrapper>
//                 <CardElement />
//             </FormWrapper>
//             <Button type="submit" disabled={!stripe}>
//                 Pay ${totalPrice()}
//             </Button>
//         </form>
//     );
// };

// export const CheckOut = () => {
//     const cart = useCartStore((state) => state.cart);

//     return (
//         <Elements stripe={stripePromise}>
//             <CheckoutWrapper>
//                 <Section>
//                     <Title>Order Summary</Title>
//                     {cart.map((item) => (
//                         <div key={`${item.id}-${item.size}`}>
//                             <p>{item.title} (Size: {item.size}) x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                     ))}
//                     <h3>Total: ${useCartStore.getState().totalPrice()}</h3>
//                 </Section>
//                 <Section>
//                     <Title>Payment Information</Title>
//                     <CheckoutForm />
//                 </Section>
//             </CheckoutWrapper>
//         </Elements>
//     );
// };
