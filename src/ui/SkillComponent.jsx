import styled from 'styled-components';

const StyledSkillComponent = styled.div`
  display: flex;
  background-color: #0a0d12;
  width: 140px;
  height: 140px;
  border-radius: 50%;

  box-shadow: 4px 4px 3px #07090c;

  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const SkillPic = styled.div`
  & img {
    width: 110px;
    height: 105px;
    padding-left: 3px;
    padding-top: 3px;
  }
`;

function SkillComponent({ picture, size }) {
  return (
    <StyledSkillComponent>
      <SkillPic>
        <img
          src={picture}
          style={size ? { height: size.height, width: size.width } : {}}
        />
      </SkillPic>
    </StyledSkillComponent>
  );
}

export default SkillComponent;
