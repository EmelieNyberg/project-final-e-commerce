// SignUpPage.jsx

import { useNavigate } from "react-router-dom";
import { useUserFormStore } from "../stores/UserFormStore";
import { Header } from "../components/Header";
import styled from "styled-components";

const SignUpContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 30px 10px;
  font-family: ${({ theme }) => theme.fonts.Font2};
`;

const SignUpHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
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
  color: ${({ theme }) => theme.colors.Font3};
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
    border-color: ${({ theme }) => theme.colors.BtnLinkActive};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Btn1}; 
  color: ${({ theme }) => theme.colors.Font2};              
  margin-top: 20px;
  padding: 12px 24px;         
  border: none;              
  border-radius: 30px;      
  font-size: 16px;            
  font-weight: bold;         
  cursor: pointer;          
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.BtnLinkHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.BtnDisabled}; 
    color: ${({ theme }) => theme.colors.Font4}; 
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.Font3};
  margin-top: 10px;
  font-size: 14px;
`;

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, errorMessage, updateErrorMessage, resetForm } = useUserFormStore();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    updateFormData({ [name]: type === "checkbox" ? checked : value });
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
        alert("You have now signed up successfully! Please login to see your new account"); // Notification to user
        resetForm(); // Clean all inputfields
        navigate("/login"); // Navigate to login page
      } else {
        updateErrorMessage(data.message); // Show error messages from backend
      }
    } catch (error) {
      updateErrorMessage("An error occurred. Please try again later.");
    }
  };

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
              <CheckboxInput
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <p>I accept the terms and conditions <Asterisk>*</Asterisk></p>
            </CheckboxLabel>

            <StyledButton
              type="submit"
              disabled={!isFormValid}>
              Sign Up
            </StyledButton>
          </form>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};