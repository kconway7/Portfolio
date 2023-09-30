import styled from 'styled-components';
import Section from '../ui/Section';

const StyledEducation = styled.div`
  color: white;
  /* background-color: white; */
  outline: 1px solid white;

  width: 1200px;
  height: 600px;
  margin: auto;
  margin-top: 0;
  top: 20%;

  position: relative;
  z-index: 2;

  &:before {
    height: 2px;
    width: 1200px;
    background-color: #262b31;
    content: '';
    position: absolute;
    top: -10vh;
  }

  &:after {
    height: 2px;
    width: 1200px;
    background-color: #262b31;
    content: '';
    position: absolute;
    bottom: -10vh;
  }
`;

const SkillsAndEdu = styled.div`
  display: flex;
`;

function Education() {
  return (
    <Section height={'100vh'}>
      <StyledEducation>
        <div>
          <h3>Education &amp; Skills</h3>
        </div>
        <SkillsAndEdu>
          <div>fdsa</div>
          <div>fdsa</div>
        </SkillsAndEdu>
      </StyledEducation>
    </Section>
  );
}

export default Education;
