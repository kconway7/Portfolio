import styled from 'styled-components';
import NavButton from './NavButton';
import PicName from './PicName';
import LinkIcons from './LinkIcons';
import { FaHome, FaPortrait, FaProjectDiagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const StyledNavBar = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: center;

  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;

  margin: 0;
  padding: 0;
  width: 250px;
  height: 100vh;
  gap: 250px;

  background-color: #0a0d12;

  /* @media only screen and (max-width: 1000px) {
    gap: 10px;
  } */
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <li style={{ color: 'white' }}>
        <PicName />
      </li>
      <StyledListItem>
        <NavButton>
          <FaHome />
          Home
        </NavButton>
        <NavButton>
          <FaPortrait />
          About Me
        </NavButton>
        <NavButton>
          <FaProjectDiagram />
          Projects
        </NavButton>
        <NavButton>
          <GrMail />
          Contact Me
        </NavButton>
      </StyledListItem>
      <li style={{ color: 'white' }}>
        <LinkIcons />
      </li>
    </StyledNavBar>
  );
}

export default NavBar;
