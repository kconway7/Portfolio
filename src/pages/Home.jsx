import styled from 'styled-components';
import Button from '../ui/Button';
import Section from '../ui/Section';

const StyledHome = styled.div`
  color: #e7e7e8;
  /* background-color: white; */
  /* border: 1px solid white; */

  display: flex;
  text-align: center;
  align-items: center;

  width: 1200px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 22vh;

  position: relative;
  z-index: 2;
`;

const Introduction = styled.div`
  width: 600px;
  text-align: left;
`;

const StyledImage = styled.img`
  height: 500px;
  margin: auto;
  border: 3px solid white;
  border-radius: 100%;
`;

const StyledName = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  line-height: 0.7;
`;

const StyledParagraph = styled.p`
  font-weight: lighter;
  font-size: 1.2rem;
  margin-top: 36px;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const StyledCircle = styled.div`
  background-color: #0a0d12;
  position: absolute;
  right: -20vh;
  top: -20vh;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
`;

function Home() {
  return (
    <Section height={`100vh`} id="home">
      <StyledHome>
        <Introduction>
          <StyledName>Keddy Conway</StyledName>
          <h3>I am a Junior Web Developer/Software Engineer</h3>
          <StyledParagraph>
            I am a recent graduate looking to gain experience and advance my
            career. If you are looking for self-starter that is studious and
            eager to learn more and make contributions, then contact me
            whenever!
          </StyledParagraph>
          <Button width={'160px'} height={'40px'}>
            Download CV
          </Button>
        </Introduction>
        <StyledImage src="/DefaultPic.svg"></StyledImage>
      </StyledHome>
      <StyledCircle />
    </Section>
  );
}

export default Home;
