import { Header } from "../components/Header";
import { Button } from "../components/Button"; // Importera din Button-komponent
import styled from "styled-components";

// Wrapper för hela sidan
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
  color: #333;
`;

// Sektionstitel
const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

// Kontaktinformation
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;

  p {
    margin: 5px 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

// Kontaktformulär
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  label {
    font-size: 1rem;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  /* Ingen egen styling för knappen här */
`;

export const Contact = () => {
  return (
    <>
      <Header title="Contact" subtitle="Contact Us" />
      <ContactWrapper>
        <SectionTitle>Get in touch</SectionTitle>
        <ContactInfo>
          <p>
            <strong>Address:</strong> 123 Fake Street, Faketown, FK123
          </p>
          <p>
            <strong>Email:</strong> contact@fakeemail.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Business Hours:</strong> Mon-Fri: 9am - 5pm
          </p>
        </ContactInfo>

        <ContactForm>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
          {/* Använd din Button-komponent */}
          <Button text="Send Message" />
        </ContactForm>
      </ContactWrapper>
    </>
  );
};
