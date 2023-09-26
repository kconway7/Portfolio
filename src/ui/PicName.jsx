import styled from 'styled-components';

const StyledImage = styled.img`
  height: 8rem;
  display: block;
  margin: 4.8rem auto 0 auto;
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
