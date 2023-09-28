import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #6812da;
  color: #f0e7fb;
  width: 160px;
  height: 40px;
  border: 0;

  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 1px;

  cursor: pointer;
  transition: ease-in-out;
  transition-duration: 300ms;

  box-shadow: 5px 5px #f0e7fb;

  &:hover {
    background-color: #f0e7fb;
    color: #6812da;
    box-shadow: 4px 4px #6812da;
  }
`;

function Button({ message }) {
  return <StyledButton>{message}</StyledButton>;
}

export default Button;
