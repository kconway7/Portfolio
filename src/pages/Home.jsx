import styled from 'styled-components';
import Button from '../ui/Button';
import Section from '../ui/Section';
import Typed from 'react-typed';
import Container from '../ui/Container';

const StyledHome = styled.div`
  color: #e7e7e8;
  /* background-color: white; */
  /* border: 1px solid white; */

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;

  position: relative;
  z-index: 2;

  @media only screen and (max-width: 1560px) {
    width: auto;
  }

  @media only screen and (max-width: 880px) {
    flex-direction: column;
    gap: 50px;
    width: auto;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 14vh;
  }
`;

const Introduction = styled.div`
  width: 600px;
  text-align: left;

  @media only screen and (max-width: 1560px) {
    width: 400px;
  }

  @media only screen and (max-width: 880px) {
    flex-direction: column;
    gap: 50px;
    max-width: 600px;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  height: 500px;
  margin: auto;
  border: 3px solid white;
  border-radius: 100%;

  @media only screen and (max-width: 1560px) {
    height: 400px;
    margin-left: 40px;
  }

  @media only screen and (max-width: 880px) {
    max-width: 450px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

const StyledName = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 24px;

  @media only screen and (max-width: 1560px) {
    font-size: 2.8rem;
  }
`;

const StyledParagraph = styled.p`
  font-weight: lighter;
  font-size: 1.2rem;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

function Home() {
  return (
    <Section id="home">
      <Container>
        <StyledHome>
          <Introduction>
            <StyledName>Keddy Conway</StyledName>
            <Row>
              <p className="test">Junior</p>
              <Typed
                style={{ fontSize: '1rem' }}
                className="test"
                strings={['Web Developer', 'Software Engineer']}
                typeSpeed={90}
                backSpeed={110}
                loop={true}
              ></Typed>
            </Row>
            <StyledParagraph>
              I am a recent graduate looking to gain experience and advance my
              career. If you are looking for self-starter that is studious and
              eager to learn more, contact me!
            </StyledParagraph>
            <Button width={'160px'} height={'40px'}>
              Download CV
            </Button>
          </Introduction>
          <StyledImage src="/DefaultPic.svg"></StyledImage>
        </StyledHome>
        <StyledCircle />
      </Container>
    </Section>
  );
}

export default Home;
