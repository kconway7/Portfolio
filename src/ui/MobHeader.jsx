import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from '../context/ContextProvider';

const StyledMobHeader = styled.div`
  display: none;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 20;
  box-shadow: 1px 0px 1px black;

  @media screen and (max-width: 1150px) {
    display: block;
    background-color: var(--color-charcoal-shade1);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  padding: 10px 20px;

  & svg {
    height: 36px;
    width: 36px;
    padding: 6px;

    background-color: #6812da;
    fill: #f0e7fb;
    stroke: var(--color-purple-tint1);
    cursor: pointer;
  }

  & h2 {
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 0;
    color: var(--color-text-main);
  }
`;

function MobHeader() {
  const { toggleNav } = useGlobalContext();

  return (
    <StyledMobHeader>
      <Row>
        <h2>Keddy</h2>
        <AiOutlineMenu onClick={toggleNav} />
      </Row>
    </StyledMobHeader>
  );
}

export default MobHeader;
