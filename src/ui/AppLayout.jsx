// import styled from 'styled-components';
import styled from 'styled-components';
import NavBar from './NavBar';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import DarkModeToggle from './DarkModeToggle';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import ContactMe from '../pages/ContactMe';

const Main = styled.div`
  background-color: #0e131a;
  position: relative;
  width: calc(100vw - 14vw);
  left: 14vw;
  overflow: hidden;
`;

const StyledAppLayout = styled.div`
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <DarkModeToggle />
        <Home />
        <AboutMe />
        <Education />
        <Projects />
        <ContactMe />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
