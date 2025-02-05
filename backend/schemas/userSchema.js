// userSchema.js

import mongoose from "mongoose";
import crypto from "crypto";

const { Schema, model } = mongoose;

// Schema for user data
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Saves email in lower case letters
    // Allows characters before @ that are not spaces or @. Requires an @ followed 
    // by valid characters. Requires a dot . followed by at least one character, e.g., .com.
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // Check that the password follows a specific pattern. Ensure that the password contains at 
    // least one lowercase letter, at least one uppercase letter, and one digit. 
    // Special characters are allowed but not required.
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  },

  // Creates an access token
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

const User = model("User", userSchema);

export default User;