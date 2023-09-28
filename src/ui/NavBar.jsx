import styled from 'styled-components';
import NavButton from './NavButton';
import PicName from './PicName';
import LinkIcons from './LinkIcons';
import {
  FaHome,
  FaPortrait,
  FaProjectDiagram,
  FaGraduationCap,
} from 'react-icons/fa';
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

  li:last-of-type {
    margin-top: auto;
    margin-bottom: 20px;
  }

  /* @media only screen and (max-width: 1000px) {
    gap: 10px;
  } */
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
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
          <FaGraduationCap />
          Education/Skills
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
