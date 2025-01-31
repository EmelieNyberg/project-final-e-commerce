// Footer.jsx

import { PiFacebookLogoBold } from "react-icons/pi";
import { TbBrandTwitter } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.Footer};
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

// Layout för att gruppera sektionerna
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;

const FooterSection = styled.section`
  width: 200px;

  h2 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.Font2};
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.Font2};
  }

  p {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.Font1};
    margin-bottom: 10px;
    margin-right: 40px;
    color: ${({ theme }) => theme.colors.Font2};
  }

  a {
    text-decoration: none;
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.Font2};
    font-family: ${({ theme }) => theme.fonts.Font1};
    margin: 10px 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Sektion för copyright och ikoner
const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
  color: ${({ theme }) => theme.colors.Font2};

  p {
    font-family: ${({ theme }) => theme.fonts.Font2};
    margin: 0;
    font-size: 16px;
    margin-bottom: 20px; 
  }

  a {
    margin: 0 10px; /* Avstånd mellan ikoner */
    color: ${({ theme }) => theme.colors.Font2};
    font-size: 24px; /* Ikonstorlek */

    &:hover {
      color: ${({ theme }) => theme.colors.BtnLinkHover}; /* Ändra färg vid hover */
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterSection>
          <h2>About JollyKid</h2>
          <p>
            Your go-to online store for sustainable and stylish children’s
            clothing.
          </p>
        </FooterSection>
        <FooterSection>
          <h2>About Us</h2>
          <a href="/about/team">Meet the team</a>
          <a href="/about/careers">Contact us</a>
        </FooterSection>
        <FooterSection>
          <h2>My Pages</h2>
          <a href="/support/faq">Sign in</a>
          <a href="/support/chat">My shopping cart</a>
          <a href="/support/tickets">Become a member</a>
        </FooterSection>
        <FooterSection>
          <h2>Categories</h2>
          <a href="/service/returns">Returns</a>
          <a href="/service/shipping">Shipping</a>
          <a href="/service/contact">Contact Us</a>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>Follow us</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <PiFacebookLogoBold />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TbBrandTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <PiInstagramLogoBold />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutubeSquare />
        </a>
      </FooterBottom>
    </StyledFooter>
  );
};
