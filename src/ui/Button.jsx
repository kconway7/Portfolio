import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-purple-main);
  border: 0;

  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 2px;

  cursor: pointer;
  transition: ease-in-out;
  transition-duration: 300ms;

  box-shadow: 4px 4px var(--color-purple-tint1);

  & a {
    color: #f0e7fb;
  }

  &:hover {
    background-color: var(--color-purple-tint1);
    box-shadow: 4px 4px #6812da;

    & a {
      color: var(--color-button-hover);
    }
  }
`;

function Button({ children, width, height, href }) {
  return (
    <StyledButton style={{ width: width, height: height }}>
      <a style={{ textDecoration: 'none' }} href={href}>
        {children}
      </a>
    </StyledButton>
  );
}

export default Button;
