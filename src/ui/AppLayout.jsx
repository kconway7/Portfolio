// import styled from 'styled-components';
import styled from 'styled-components';
import NavBar from './NavBar';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import DarkModeToggle from './DarkModeToggle';
import EducationPage from '../pages/Education';
import Projects from '../pages/Projects';
import ContactMe from '../pages/ContactMe';
import MobHeader from './MobHeader';

const Main = styled.div`
  background-color: var(--color-charcoal-main);
  position: relative;
  width: calc(100vw - 280px);
  left: 280px;
  overflow: hidden;

  @media screen and (max-width: 1150px) {
    left: 0;
    width: calc(100vw);
  }
`;

const StyledAppLayout = styled.div`
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <MobHeader />
      <NavBar />
      <Main>
        <DarkModeToggle />
        <Home />
        <AboutMe />
        <EducationPage />
        <Projects />
        <ContactMe />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
