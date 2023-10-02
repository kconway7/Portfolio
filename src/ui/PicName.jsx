import styled from 'styled-components';

const StyledImage = styled.img`
  height: 8rem;
  height: 150px;
  display: block;
  margin: 7vh auto 0 auto;
  border: 6px solid white;
  border-radius: 100%;
`;

const StyledPicName = styled.div`
  margin-bottom: -12rem;

  & p {
    font-size: 1.2rem;
    font-weight: lighter;
    margin-top: 0.8rem;
    text-align: center;
    letter-spacing: 3px;
  }
`;

function PicName() {
  return (
    <StyledPicName>
      <StyledImage src="/DefaultPic.svg" />
      <p>Keddy Conway</p>
    </StyledPicName>
  );
}

export default PicName;
