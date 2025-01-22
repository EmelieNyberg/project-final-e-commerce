// LogIn.jsx

import { useUserFormStore } from "../stores/UserFormStore";
import { useUserStore } from "../stores/UserStore";
import styled from "styled-components";

const LogInContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 30px 10px;
  font-family: "Poppins", serif;
`;

const LogInHeader = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

const LogInWrapper = styled.div`
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  background-color: #c79ced; // Lila bakgrund
  color: white;               // Vit text
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

const RegisterText = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`;

const RegisterLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: #ff7bbc;
  }
`;

const ErrorMessage = styled.p`
  color: #AA0000;
  margin-top: 10px;
  font-size: 14px;
`;

export const LogIn = () => {
  const { formData, updateFormData, errorMessage, updateErrorMessage, resetForm } = useUserFormStore();
  const { setUser } = useUserStore();

  // Handle data that is written in form (not submitted yet)
  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({ [name]: value });
  };

  // Function to send data to backend when submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // Här kan du hantera accessToken eller navigera användaren vidare

        // Save accessToken in localStorage
        localStorage.setItem("accessToken", data.accessToken);

        resetForm(); // Clean form from input text and error message
      } else {
        updateErrorMessage(data.message); // Show error message from backend
      }
    } catch (err) {
      updateErrorMessage("An error occurd. Please try again later.");
    }
  };

  const isFormValid =
    formData.email &&
    formData.password;

  return (
    <>
      <LogInContainer>
        <LogInHeader>Log In</LogInHeader>

        <LogInWrapper>
          <form onSubmit={handleSubmit}>

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

            <ButtonWrapper>
              <StyledButton type="submit" disabled={!isFormValid}>
                Log In
              </StyledButton>

              <RegisterText>Not a member yet? <RegisterLink href="/signup">Register</RegisterLink></RegisterText>
            </ButtonWrapper>
          </form>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </LogInWrapper>
      </LogInContainer>
    </>
  );
};
