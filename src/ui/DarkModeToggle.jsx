import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';

const StyledButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: #f0e7fb;
  border-radius: 50%;
  border: 0;

  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: fixed;
  top: 10px;
  right: 17px;
  z-index: 6;

  padding: 0;

  & svg {
    fill: orange;
    stroke: orange;
  }

  @media screen and (max-width: 1150px) {
    top: 80px;
  }
`;

function DarkModeToggle() {
  return (
    <StyledButton>
      <FaSun />
    </StyledButton>
  );
}

export default DarkModeToggle;
