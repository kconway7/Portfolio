import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';

const StyledButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: #f0e7fb;
  border-radius: 50%;
  color: orange;
  border: 0;

  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: absolute;
  right: 0;
  z-index: 6;
`;

function DarkModeToggle() {
  return (
    <StyledButton>
      <FaSun />
    </StyledButton>
  );
}

export default DarkModeToggle;
