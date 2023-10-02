import { FaCircleCheck } from 'react-icons/fa6';
import styled from 'styled-components';

const StyledSkillComponent = styled.div`
  display: flex;
  background-color: #0a0d12;
  width: 400px;
  height: 58px;

  align-items: center;
  gap: 40px;

  & svg {
    margin-left: 24px;
    width: 32px;
    height: 32px;
    fill: #6812da;
  }
`;

function SkillComponent() {
  return (
    <StyledSkillComponent>
      <FaCircleCheck />
      <p>SKILL</p>
    </StyledSkillComponent>
  );
}

export default SkillComponent;
