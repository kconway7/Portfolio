import styled from 'styled-components';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import EducationComponent from '../ui/EducationComponent';
import SkillComponent from '../ui/SkillComponent';

const StyledEducationAndSkills = styled.div`
  display: flex;
  justify-content: space-around;

  width: 1150px;
  height: 600px;
  margin: auto;

  @media only screen and (max-width: 1430px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 44px;

  margin-top: 84px;

  @media only screen and (max-width: 1430px) {
    grid-template-columns: auto auto auto;
    margin-left: 30px;
    gap: 30px;
  }

  @media only screen and (max-width: 640px) {
    margin-left: 0px;
  }

  @media only screen and (max-width: 530px) {
    grid-template-columns: auto auto;
    gap: 24px;
    margin-left: 36px;
  }

  @media only screen and (max-width: 470px) {
    grid-template-columns: auto auto;
    gap: 20px;
    margin-left: 12px;
  }
`;

function EducationPage() {
  return (
    <Section height={'auto'} id="education">
      <Container>
        <Heading className={'education-header'}>EDUCATION & SKILLS</Heading>
        <StyledEducationAndSkills>
          <Education>
            <EducationComponent />
          </Education>
          <Skills>
            {/* <HeadingSmall>Skills</HeadingSmall> */}
            <StyledGrid>
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/React.png'}
              />
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/NodeJs.svg'}
              />
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/NetCore.png'}
                size={{ width: '113px', height: '113px' }}
              />
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/SQL.svg'}
              />
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/csharp.svg'}
                size={{ width: '130px', height: '130px' }}
              />
              <SkillComponent
                skill={'React.js'}
                picture={'/SkillPics/Java.svg'}
              />
            </StyledGrid>
          </Skills>
        </StyledEducationAndSkills>
      </Container>
    </Section>
  );
}

export default EducationPage;
