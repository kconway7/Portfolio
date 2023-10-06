import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from './Button';
// import { fdsa } from '../assets/Omnifood1.png';

const StyledProject = styled.div`
  width: 700px;
  background-color: var(--color-charcoal-shade1);
  padding-bottom: 10px;

  transition: ease-in-out;
  transition-duration: 250ms;
  box-shadow: 5px 5px 3px var(--color-charcoal-shade2);

  &:hover {
    background-color: var(--color-project-hover);
  }

  @media only screen and (max-width: 1730px) {
    width: 850px;
  }

  @media only screen and (max-width: 890px) {
    width: auto;
    margin-left: 32px;
    margin-right: 36px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 36px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  @media only screen and (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.h2`
  color: var(--color-purple-tint1);
  text-align: center;
  line-height: 1;
  letter-spacing: 1px;
`;

const Description = styled.div`
  color: var(--color-purple-tint1);
`;

const Technologies = styled.h3`
  color: var(--color-purple-tint1);
  margin-top: -3px;
  margin-bottom: 12px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  margin-top: 36px;
  bottom: 0px;

  @media only screen and (max-width: 1730px) {
    justify-content: space-around;
    margin-top: 50px;

    & button {
      width: 200px !important;
      height: 40px !important;
    }
  }

  @media only screen and (max-width: 890px) {
    flex-direction: column;
    width: auto;
    gap: 40px;
    align-items: center;

    & button {
      width: 90% !important;
      height: 50px !important;
    }
  }
`;

const SecondDiv = styled.div`
  position: relative;
`;

function Project({
  pictures = ['/ProjectPlaceHolder.png'],
  description,
  name,
  tech,
  hrefDemo,
  hrefCode,
}) {
  return (
    <StyledProject>
      <Header>{name}</Header>
      <Row>
        <Carousel
          width={'300px'}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={7000}
          transitionTime={600}
          infiniteLoop={true}
        >
          {pictures.map((pic) => {
            return (
              <div key={pic}>
                <img src={pic} />
              </div>
            );
          })}
        </Carousel>
        <SecondDiv>
          <Technologies>TECH USED: {tech}</Technologies>
          <Description>{description}</Description>
          <ButtonBox>
            <Button href={hrefDemo} height={'35px'} width={'130px'}>
              View Demo
            </Button>
            <Button href={hrefCode} height={'35px'} width={'130px'}>
              View Code
            </Button>
          </ButtonBox>
        </SecondDiv>
      </Row>
    </StyledProject>
  );
}

export default Project;
