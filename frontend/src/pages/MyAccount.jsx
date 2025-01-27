// MyAccount.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/UserStore";
import { Header } from "../components/Header";
import styled from "styled-components";

const MyAccountContainer = styled.div`
  text-align: center;
  max-width: 700px;
  margin: auto;
  padding: 30px 10px;
`;

const WelcomeMessage = styled.h2`
  font-family: ${({ theme }) => theme.fonts.Font1};
  color: ${({ theme }) => theme.colors.Font1};
`;

const WelcomeText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.Font1};
`;

const ContactLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.Font1};

  &:hover {
    color: ${({ theme }) => theme.colors.BtnLinkHover};
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Btn1};
  color: ${({ theme }) => theme.colors.Font2};              
  padding: 12px 24px;         
  border: none;               
  border-radius: 30px;        
  font-family: ${({ theme }) => theme.fonts.Font2};
  font-size: 16px;            
  font-weight: 500;         
  cursor: pointer;           
  transition: background-color 0.3s ease; 

  // Hover-effect
  &:hover {
    background-color: ${({ theme }) => theme.colors.BtnLinkHover};
  }
`;

export const MyAccount = () => {
  const navigate = useNavigate();
  const { user, setUser, clearUser } = useUserStore();

  useEffect(() => {
    const fetchMyAccount = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        clearUser(); // Om token saknas, rensa användardata
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/users/my-account", {
          method: "GET",
          headers: {
            Authorization: token, // Skicka token i headern
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Uppdatera användardata i Zustand
        } else {
          clearUser(); // Logga ut om token är ogiltig
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
        clearUser(); // Logga ut vid fel
      }
    };

    fetchMyAccount();
  }, [setUser, clearUser]);

  const handleLogout = () => { // On click
    clearUser(); // Clear user info
    localStorage.removeItem("accessToken"); // Remove Access token from local storage
    alert("You are now logged out, see you again soon!"); // Give user en alert to notify them that they are logged out
    navigate("/");
  };

  return (
    <>
      <Header title="My Account" subtitle="Account Details" />
      {user ? (
        <MyAccountContainer>
          <WelcomeMessage>Welcome {user.firstName} {user.lastName}!</WelcomeMessage>
          <WelcomeText>We're happy to see you again. Here, you can view your recent orders, update your profile, and explore your favorites. Need assistance? Don’t hesitate to contact our <ContactLink href="/contact">customer service</ContactLink>.</WelcomeText>
          <StyledButton onClick={handleLogout}>
            Log Out
          </StyledButton>
        </MyAccountContainer>
      ) : null
      }
    </>
  );
};
