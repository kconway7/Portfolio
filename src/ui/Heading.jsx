import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: #f0e7fb;
  text-align: center;
  position: relative;
  font-weight: 400;
  display: inline-block;

  &:before {
    width: 100px;
    height: 3px;
    background-color: #6812da;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;

    content: '';
  }

  &:after {
    width: 10px;
    height: 10px;
    background-color: #6812da;
    position: absolute;
    border-radius: 50%;

    bottom: -7px;
    left: 100px;
    right: 0;

    content: '';
  }
`;

function Heading({ children, fontSize = '3.6rem' }) {
  return (
    <StyledHeading style={{ fontSize: fontSize }}>{children}</StyledHeading>
  );
}

export default Heading;
