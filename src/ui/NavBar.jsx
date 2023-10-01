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
import '../index.css';
import { useEffect, useState } from 'react';

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
  width: 14vw;
  min-width: 250px;
  height: 100vh;
  gap: 250px;

  background-color: #0a0d12;
  overflow: hidden;

  li:last-of-type {
    margin-top: auto;
    margin-bottom: 20px;
  }

  /* @media only screen and (max-width: 1000px) {
    gap: 10px;
  } */
`;

const StyledCircle = styled.div`
  background-color: #6812da;
  position: absolute;
  width: 33vh;
  height: 33vh;
  top: -10vh;
  border-radius: 50%;
  z-index: -1;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

function NavBar() {
  // State to track the active Link and scroll State
  const [activeLink, setActiveLink] = useState('home');

  // Function to smoothly scroll to a section by its ID
  function scrollToId(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'projects', 'contact'];
    // Function to determine the active section while scrolling
    function getActiveSection() {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        // console.log(section);
        if (section !== null) {
          const rect = section.getBoundingClientRect();
          console.log('rect', rect);
          if (rect.top <= 360 && rect.bottom >= 120) {
            //Set the active link based on the section Id
            setActiveLink(sectionIds[i]);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', getActiveSection);

    //remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', getActiveSection);
    };
  }, []);

  return (
    <StyledNavBar>
      <li>
        <PicName />
      </li>
      <StyledListItem>
        <NavButton
          onClick={() => scrollToId('home')}
          className={activeLink === 'home' ? 'active' : ''}
        >
          <FaHome />
          Home
        </NavButton>
        <NavButton
          onClick={() => scrollToId('about')}
          className={activeLink === 'about' ? 'active' : ''}
        >
          <FaPortrait />
          About Me
        </NavButton>
        <NavButton
          onClick={() => scrollToId('education')}
          className={activeLink === 'education' ? 'active' : ''}
        >
          <FaGraduationCap />
          Education/Skills
        </NavButton>
        <NavButton
          onClick={() => scrollToId('projects')}
          className={activeLink === 'projects' ? 'active' : ''}
        >
          <FaProjectDiagram />
          Projects
        </NavButton>
        <NavButton
          onClick={() => scrollToId('contact')}
          className={activeLink === 'contact' ? 'active' : ''}
        >
          <GrMail />
          Contact Me
        </NavButton>
      </StyledListItem>
      <li>
        <LinkIcons />
      </li>
      <StyledCircle />
    </StyledNavBar>
  );
}

export default NavBar;
