import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #6812da;
  color: #f0e7fb;
  border: 0;

  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 1px;

  cursor: pointer;
  transition: ease-in-out;
  transition-duration: 300ms;

  box-shadow: 4px 4px #f0e7fb;

  &:hover {
    background-color: #f0e7fb;
    color: #6812da;
    box-shadow: 4px 4px #6812da;
  }
`;

function Button({ children, width, height }) {
  return (
    <StyledButton style={{ width: width, height: height }}>
      {children}
    </StyledButton>
  );
}

export default Button;
