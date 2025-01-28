// AboutUs.jsx

// import { Header } from "../components/Header";
import styled from "styled-components";

// Wrapper för hela sidan
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.Background}; /* Bakgrundsfärg */
  color: ${({ theme }) => theme.colors.Font1};
  font-family: ${({ theme }) => theme.fonts.Font2};
`;

// Sektionstitlar
const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.Font1};
  font-weight: bold;
`;

// Textstyling
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 800px;
`;

// Wrapper för team-medlemmarna
const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  flex-wrap: wrap;
`;

// Kort för varje team-medlem
const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 150px;
  
  h3 {
    font-size: 18px;
  }
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%; /* Gör formen rund */
  margin-bottom: 10px;
  background-color: #fff;
  background-image: url(${(props) => props.image}); /* Dynamisk bild */
  background-size: cover; /* Bilden täcker hela ytan */
  background-position: center; /* Bilden centreras */
  background-repeat: no-repeat; /* Bilden repeteras inte */

`;

// Länkar
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    color: #000000;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AboutUs = () => {

  return (
    <AboutWrapper>
      <SectionTitle>About Us</SectionTitle>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </Text>
      <TeamWrapper>
        {/* Person 1 */}
        <TeamMember>
          <ProfileImage image="/public/emelie.jpg" /> {/* Bild för Person 1 */}
          <h3>Emelie</h3>
          <Links>
            <a href="#contact">Contact me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#github">GitHub</a>
          </Links>
        </TeamMember>

        {/* Person 2 */}
        <TeamMember>
          <ProfileImage image="/public/profil1.jpg" /> {/* Bild för Person 2 */}
          <h3>Jonas</h3>
          <Links>
            <a href="#contact">Contact me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#github">GitHub</a>
          </Links>
        </TeamMember>
      </TeamWrapper>
    </AboutWrapper>
  );
};