import styled from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import EducationComponent from '../ui/EducationComponent';
import SkillComponent from '../ui/SkillComponent';

const StyledEducationAndSkills = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-around;

  width: 1100px;
  height: 600px;
  margin: auto;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

function EducationPage() {
  return (
    <Section height={'auto'} id="education">
      <Container>
        <Heading>Education/Skills</Heading>
        <StyledEducationAndSkills>
          <Education>
            <Heading fontSize="1rem">Education</Heading>
            <EducationComponent />
            <EducationComponent />
          </Education>
          <Skills>
            <Heading fontSize="1rem">Skills</Heading>
            <SkillComponent />
            <SkillComponent />
            <SkillComponent />
            <SkillComponent />
            <SkillComponent />
            <SkillComponent />
          </Skills>
        </StyledEducationAndSkills>
      </Container>
    </Section>
  );
}

export default EducationPage;
