// users.js

import express from "express";
import bcrypt from "bcrypt";
import User from "../schemas/userSchema.js";

const router = express.Router();

// Authenticate user function
const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header("Authorization") });
  if (user) {
    req.user = user; // Store user data in req to use later
    next();
  } else {
    res.status(401).json({ message: "Couldn't authenticate user." });
  }
};

// Create a new user
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if all fields are filled
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Normalize email to lower case letters, so that A@email.com are the same email as a@email.com
    const normalizedEmail = email.toLowerCase();

    // Check if email format is correct
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check if password format is correct
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long, include a capital letter, and a number.",
      });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // Create new user with hashed password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email: normalizedEmail,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({
      id: newUser._id,
      accessToken: newUser.accessToken
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error. Could not create user.",
      errors: err.message
    });
  }
});

// Login a user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normalize email to lower case
    const normalizedEmail = email.toLowerCase();

    // Find user in database
    const user = await User.findOne({
      email: normalizedEmail
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password."
      });
    }

    // Check password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Return accessToken to frontend
    res.json({
      accessToken: user.accessToken
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error. Could not log in.",
      errors: err.message
    });
  }
});

// Only users that are authenticated will be able to view their 
// info in the database, in this case first and last name.
router.get("/my-account", authenticateUser, (req, res) => {
  const user = req.user; // Get user from autenticateUser
  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
  });
});

export default router;