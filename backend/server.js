import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL; //|| "mongodb://localhost/final-project";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

const { Schema, model } = mongoose;

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
  price: { // Price (e.g., "$65.00")
    type: String,
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

const Product = model('Product', productSchema);


app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

// Get all products, e.g., http://localhost:8080/products
// or get a caregory of products, e.g., http://localhost:8080/products?category=dresses 
app.get("/products", async (req, res) => {
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

app.get("/products/latest-products", async (req, res) => {
  const products = await Product.find().sort({ id: 'desc' }).limit(4).exec();
  res.json(products);
});

// Endpoint that returns one single product
// For example with id=3 http://localhost:8080/products/3
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ id: +id });

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "No product found with that ID" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
