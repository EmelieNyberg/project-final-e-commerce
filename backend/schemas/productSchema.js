// productSchema.js

import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Schema for product data
const productSchema = new Schema({
    id: { // ID (e.g., 6)
        type: Number,
        required: true
    },
    title: { // Title (e.g., "Waterproof Jacket")
        type: String,
        required: true
    },
    brand: { // Brand (e.g., "Konges Sløjd")
        type: String,
        required: true
    },
    category: { // Category (e.g "Outerwear")
        type: String,
        required: true
    },
    description: { // Description (e.g., text about the jacket)
        type: String,
        required: true
    },
    price: { // Price (e.g., "65.00")
        type: Number,
        required: true
    },
    material: { // Material (e.g., "100% Polyester")
        type: String,
        required: true
    },
    wash: { // Washing instructions (e.g., "Machine wash 30º")
        type: String,
        required: true
    },
    size: { // Available sizes (e.g., ["86", "92", "98", "104"])
        type: [String],
        required: true
    },
    image: {
        url: { // Image URL (e.g., "https://...")
            type: String,
            required: true
        },
    }
});

const Product = model("Product", productSchema);

export default Product;