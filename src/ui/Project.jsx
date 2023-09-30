import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from './Button';
// import { fdsa } from '../assets/Omnifood1.png';

const StyledProject = styled.div`
  width: 700px;
  background-color: #0a0d12;
  padding-bottom: 10px;

  transition: ease-in-out;
  transition-duration: 250ms;
  box-shadow: 5px 5px 3px #07090c;

  /* Temp */
  /* margin-left: 300px; */

  &:hover {
    background-color: #0d0f14;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 36px;
  padding-bottom: 24px;
  padding-left: 28px;
`;

const Header = styled.h2`
  color: #f0e7fb;
  text-align: center;
  line-height: 1;
  letter-spacing: 1px;
`;

const Description = styled.div`
  color: #f0e7fb;
`;

const Technologies = styled.h3`
  color: #f0e7fb;
  margin-top: -3px;
  margin-bottom: 12px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 32px;
  position: absolute;
  bottom: 6px;
`;

const SecondDiv = styled.div`
  position: relative;
  margin-right: 24px;
`;

function Project({
  pictures = ['/ProjectPlaceHolder.png'],
  description,
  name,
  tech,
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
            <Button height={'30px'} width={'120px'}>
              View Demo
            </Button>
            <Button height={'30px'} width={'120px'}>
              View Code
            </Button>
          </ButtonBox>
        </SecondDiv>
      </Row>
    </StyledProject>
  );
}

export default Project;

{
  /* <div>
<img src={pictures[0]} />
</div>
<div>
<img src={pictures[1]} />
</div>
<div>
<img src={pictures[2]} />
</div> */
}
