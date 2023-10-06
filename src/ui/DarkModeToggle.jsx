import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';
import { BsMoonFill } from 'react-icons/bs';

import { useGlobalContext } from '../context/ContextProvider';

const StyledButton = styled.button`
  width: 55px;
  height: 55px;
  background-color: var(--color-purple-tint1);
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
    fill: var(--color-darkbutton);
  }

  @media screen and (max-width: 1150px) {
    top: 80px;
  }
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  return (
    <StyledButton onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <BsMoonFill />}
    </StyledButton>
  );
}

export default DarkModeToggle;
