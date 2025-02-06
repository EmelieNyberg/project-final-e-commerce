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
    margin: 0 10px; 
    color: ${({ theme }) => theme.colors.Font2};
    font-size: 24px;

    &:hover {
      color: ${({ theme }) => theme.colors.BtnLinkHover};
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
          <a href="/about-us">Meet the team</a>
          <a href="/contact">Contact us</a>
        </FooterSection>
        <FooterSection>
          <h2>My Pages</h2>
          <a href="/login">Login</a>
          <a href="/shoppingcart">My shopping cart</a>
          <a href="/signup">Become a member</a>
        </FooterSection>
        <FooterSection>
          <h2>Categories</h2>
          <a href="/contact">Returns</a>
          <a href="/contact">Shipping</a>
          <a href="/contact">Contact Us</a>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>Follow us</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="facebook">
          <PiFacebookLogoBold />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="twitter">
          <TbBrandTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="instagram">
          <PiInstagramLogoBold />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="linkedin">
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="youtube">
          <FaYoutubeSquare />
        </a>
      </FooterBottom>
    </StyledFooter>
  );
};
