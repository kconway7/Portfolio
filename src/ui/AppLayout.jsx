// import styled from 'styled-components';
import styled from 'styled-components';
import NavBar from './NavBar';

const Main = styled.div`
  height: 3000px;
  background-image: linear-gradient(#0e131a, #0f0120);
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
      <Main></Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
