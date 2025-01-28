import styled from "styled-components";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TbBrandTwitter } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

// Huvudcontainer för footern
const StyledFooter = styled.footer`
  width: 100%;
  background-color: #0e1216;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

// Sektioner i footern
const FooterSection = styled.section`
flex: 1;
  min-width: 200px;
  /* margin: 10px; */
  padding: 0 100px; 


  h2 {
    font-size: 18px;
    font-family: "Poppins", serif;
    margin-bottom: 10px;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    /* font-weight: 400; */
    margin-bottom: 10px;
    margin-right: 40px;
    color: #ffffff;
   
  }

  a {
    display: block;
    font-size: 16px;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap; /* Tillåter innehåll att brytas på mindre skärmar */
  justify-content: space-evenly; /* Sprider sektionerna jämnt horisontellt */
  width: 100%;
  padding: 0 20px; /* Grundavstånd från kanterna för mobiler */
  box-sizing: border-box;

  @media (min-width: 768px) {
    justify-content: space-between; /* Fördelar sektionerna jämnt med större avstånd */
    padding: 0 100px; /* Lägger till avstånd på båda sidor för surfplattor och större skärmar */
  }

  @media (min-width: 1024px) {
    padding: 0px 0px 0px 200px; /* Mer avstånd för desktop-skärmar */
  }
`;

// Sektion för copyright och ikoner
const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  color: white;

  p {
    font-family: "Poppins", serif;
    margin: 0;
    font-size: 16px;
    margin-bottom: 20px;
    
  }

  a {
    margin: 0 10px; /* Avstånd mellan ikoner */
    color: white;
    font-size: 24px; /* Ikonstorlek */

    &:hover {
      color: #007bff; /* Ändra färg vid hover */
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
        {/* <FooterSection>
          <h2>Categories</h2>
          <a href="/service/returns">Returns</a>
          <a href="/service/shipping">Shipping</a>
          <a href="/service/contact">Contact Us</a>
        </FooterSection> */}
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
