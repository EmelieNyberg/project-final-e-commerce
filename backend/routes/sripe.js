// Stripe.js

import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";

const router = express.Router();
dotenv.config();


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe("sk_test_51Qjgfi08VDFOASl7x1CsH8zYyC0JhyUva4zdaXwuasPLrRStpBc5T46OGiTK6GOGqP4BUY1OwWPyvkjlzBia9zEH00g4EahAZ2");


// Endpoint för att skapa Stripe Checkout-session
router.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body; // Förväntar en array med { id, quantity }
  try {
    const lineItems = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findOne({ id: item.id });
        if (!product) throw new Error(`Produkt med id ${item.id} hittades inte.`);
        return {
          price_data: {
            currency: "sek",
            product_data: {
              name: product.title,
              images: [product.image.url],
            },
            unit_amount: product.price * 100, // Omvandla till ören
          },
          quantity: item.quantity,
        };
      })
    );
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",

      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cart",

      // success_url: `${process.env.REACT_APP_BACKEND_URL}/success`,
      // cancel_url: `${process.env.REACT_APP_BACKEND_URL}/cart`,
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;