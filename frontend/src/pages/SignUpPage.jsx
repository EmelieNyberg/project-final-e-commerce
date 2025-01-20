// SignUpPage.jsx

import { useState } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";

const SignUpContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 30px 0;
  font-family: "Poppins", serif;
`;

const SignUpHeader = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

const SignUpWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 35px 42px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Asterisk = styled.span`
  color: #AA0000;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff7bbc;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  cursor: pointer;
`;

const StyledButton = styled.button`
  background-color: #c79ced; // Lila bakgrund
  color: white;               // Vit text
  margin-top: 20px;
  padding: 12px 24px;         // Padding för att göra knappen större
  border: none;               // Ingen kant
  border-radius: 30px;        // Rundade hörn
  font-size: 16px;            // Textstorlek
  font-weight: bold;          // Fetstil
  cursor: pointer;           // Markera knappen som klickbar
  transition: background-color 0.3s ease; // Animerad övergång för bakgrundsfärg

  // Lägg till hover-effekt
  &:hover {
    background-color: #ff7bbc; // En något mörkare lila vid hover
  }

  &:disabled {
    background-color: lightgray; /* Grå bakgrund när inaktiverad */
    color: #666; /* Textfärg för inaktiverad knapp */
    cursor: not-allowed; /* Markör för inaktiverad */
  }
`;

const ErrorMessage = styled.p`
  color: #AA0000;
  margin-top: 10px;
  font-size: 14px;
`;



export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Post data to the backend
    try {
      const response = await fetch("http://localhost:8080/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User created successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          acceptTerms: false,
        });
        setErrorMessage(""); // Clean earlier error messages if there are any
      } else {
        setErrorMessage(data.message); // Show error messages from backend
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  // const isFormValid =
  //   formData.firstName &&
  //   formData.lastName &&
  //   formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
  //   formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/) &&
  //   formData.acceptTerms;

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password &&
    formData.acceptTerms;

  return (
    <>
      <Header title="Sign up" subtitle="Sign up" />

      <SignUpContainer>
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpWrapper>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="firstName">
                FIRST NAME <Asterisk>*</Asterisk>
              </Label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="lastname">
                LAST NAME <Asterisk>*</Asterisk>
              </Label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="email">
                EMAIL ADDRESS <Asterisk>*</Asterisk>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="password">
                PASSWORD <Asterisk>*</Asterisk>
              </Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormField>

            <CheckboxLabel>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              I accept the terms and conditions <Asterisk>*</Asterisk>
            </CheckboxLabel>

            <StyledButton type="submit" disabled={!isFormValid}>
              Sign Up
            </StyledButton>
          </form>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};