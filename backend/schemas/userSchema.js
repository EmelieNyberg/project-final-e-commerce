// userSchema.js

import mongoose from "mongoose";
import crypto from "crypto";

const { Schema, model } = mongoose;

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
    lowercase: true, // Sparar e-post i små bokstäver
    // Tillåter tecken före @ som inte är mellanslag eller @. Kräver ett @ följt av giltiga tecken. Kräver en punkt . följt av minst ett tecken, t.ex. .com.
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // kontrollera att lösenordet följer ett specifikt mönster. Kontrollera att lösenordet innehåller minst en liten bokstav, minst en stor bokstav, en siffra. Tillåter specialtecken, men det är inget måste.
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

const User = model("User", userSchema);

export default User;