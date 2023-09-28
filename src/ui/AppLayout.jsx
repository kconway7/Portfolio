// import styled from 'styled-components';
import styled from 'styled-components';
import NavBar from './NavBar';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const Main = styled.div`
  height: 3000px;
  background-color: #0e131a;
  position: relative;
  width: calc(100vw - 200px);
  left: 250px;
  overflow: none;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <Home />
        <AboutMe />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
