// products.js

import express from "express";
import Product from "../schemas/productSchema.js";

const router = express.Router();

// Get all products, e.g., http://localhost:8080/products
// or get a caregory of products, e.g., http://localhost:8080/products?category=dresses 
router.get("/", async (req, res) => {
    const { category } = req.query; // Get 'category' from query-parameter
    try {
        const filter = category
            ? { category: { $regex: category, $options: "i" } } // If category is defined, filter on category
            : {}; // otherwise get all products
        const products = await Product.find(filter).sort({ id: 'desc' }).exec();
        res.json(products); // Send filtered products as answere
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Endpoint that returns the newest products (limited to 4)
router.get("/latest-products", async (req, res) => {
    const products = await Product.find().sort({ id: 'desc' }).limit(4).exec();
    res.json(products);
});

// Endpoint that returns one single product
// For example with id=3 http://localhost:8080/products/3
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({ id: +id });

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "No product found with that ID" });
    }
});

export default router;