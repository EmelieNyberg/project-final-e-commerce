// AboutUs.jsx

import styled from "styled-components";
import emelie from "../../public/emelie.jpg";
import jonas from "../../public/profil1.jpg";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.Background}; 
  color: ${({ theme }) => theme.colors.Font1};
  font-family: ${({ theme }) => theme.fonts.Font2};
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  //line-height: 20px;
  margin-bottom: 30px;
  max-width: 800px;
`;

const BoldText = styled.span`
  font-weight: 500;
`;

// Wrapper for team-member
const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  flex-wrap: wrap;

  /* Mobile screens*/
  @media (max-width: 768px) {
    gap: 50px; /* Two teammembers in a column on mobiles */
  }
`;

// Card for every team member
const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 150px;
  
  h3 {
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.Font1};
  }
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%; /* Make picture round */
  margin-bottom: 10px;
  background-color: #fff;
  background-image: url(${(props) => props.image}); /* Dynamic image */
  background-size: cover; 
  background-position: center; /* Image is centered */
  background-repeat: no-repeat; /* Image do not repeat */

`;

// Links
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    color: ${({ theme }) => theme.colors.Font1};
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: ${({ theme }) => theme.colors.BtnLinkHover};
    }
  }
`;

export const AboutUs = () => {

  return (
    <AboutWrapper>
      <SectionTitle>About Us</SectionTitle>
      <Text>
        Hey there! We’re two passionate web developers who have been diving deep into the world of code at Technigo’s bootcamp for the past few months. <br /><br />

        During our 4-week project, we wanted to challenge ourselves and build something completely outside the curriculum. Enter: our e-commerce site! <br /><br />

        Why e-commerce, you ask? Well, because why not?! We realized we hadn’t explored it much during the bootcamp, so we thought: “Let’s push our skills and create something new!” And, well… here we are! <br /><br />

        We've poured our hearts, brains, and a fair amount of coffee into this project, and we hope you like it!<BoldText> If you have any questions, feedback, or just want to chat tech, feel free to reach out—we’d love to hear from you!</BoldText> <br /><br />

        Happy browsing! 🚀 <br />
        Emelie & Jonas
      </Text>
      <TeamWrapper>
        <TeamMember>
          <ProfileImage image={emelie} />
          <h3>Emelie Nyberg</h3>
          <Links>
            <a href="#contact">LinkedIn</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#github">GitHub</a>
          </Links>
        </TeamMember>

        <TeamMember>
          <ProfileImage image={jonas} />
          <h3>Jonas Hellström</h3>
          <Links>
            <a href="#contact">LinkedIn</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#github">GitHub</a>
          </Links>
        </TeamMember>
      </TeamWrapper>
    </AboutWrapper>
  );
};