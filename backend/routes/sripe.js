// Stripe.js

import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe"; // Import Stripe to handle payments
import Product from "../schemas/productSchema.js";

const router = express.Router();
dotenv.config();

// Initializing a new Stripe instance to interact with their API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Endpoint to create a Stripe Checkout-session
router.post("/create-checkout-session", async (req, res) => {
  // Getting product ID and quantity from request body, expecting
  // an array with { id, quantity }
  const { items } = req.body;

  try {
    // Creating an array of "line items" (e.g. T-shirt q:2 price: 5 
    // total:10) for Stripe by collecting product data from the database
    const lineItems = await Promise.all(
      items.map(async (item) => {
        // Get product info based on the ID that was sent from frontend
        const product = await Product.findOne({ id: item.id });

        // If product is not found, throw an error
        if (!product) throw new Error(`Product with id ${item.id} was not found.`);

        // Return data in a Line item-format that Stripe requre
        return {
          price_data: {
            currency: "USD", // currency USD
            product_data: {
              name: product.title, // Product titel from the database
              images: [product.image.url], // Product img from the database (Stripe requires an array)
            },
            unit_amount: Math.round(product.price * 100), // Convert to cents (Stripe requires cents)
          },
          quantity: item.quantity, // Quantity of products user'd like to buy
        };
      })
    );

    // Here we communicate with Stripes API by using method
    // stripe.checkout.sessions.create() witch creates a payment session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Allow card as payment
      line_items: lineItems, // All products the user should pay for
      mode: "payment", // This is a single payment (e.g. not subscription)

      // URL where user is sent if succesful payment
      success_url: "http://localhost:5173/orderconfirmation",
      // URL where user is sent if payment is aborted
      cancel_url: "http://localhost:5173/shoppingcart",
      locale: 'en', // Language on payment site in Stripe
    });

    // sends back session ID to frontend. Frontend uses 
    // the session ID and uses it to send user to Stripe
    // Checkout where payment is handled
    res.status(200).json({ id: session.id });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;