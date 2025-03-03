// server.js

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressListEndpoints from "express-list-endpoints";

dotenv.config();

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Import and use routes
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import stripeRoutes from "./routes/sripe.js";

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/", stripeRoutes);

app.get("/", (req, res) => {
  res.json(expressListEndpoints(app));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
