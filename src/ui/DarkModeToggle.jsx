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

  @media screen and (max-width: 1150px) {
    top: 80px;
  }
`;

function DarkModeToggle() {
  return (
    <StyledButton>
      <FaSun style={{ fill: 'orange' }} />
    </StyledButton>
  );
}

export default DarkModeToggle;
