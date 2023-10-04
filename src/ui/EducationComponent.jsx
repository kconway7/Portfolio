import styled from 'styled-components';
import { LuGraduationCap } from 'react-icons/lu';
import { BsFillCaretRightFill } from 'react-icons/bs';

const StyledEducationComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  width: 600px;
  height: auto;
  padding: 24px 10px;

  & img {
    width: auto;
    max-width: 580px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  /* align-items: center; */

  & svg {
    height: 36px;
    width: 36px;
    stroke: #6812da;
  }
`;

const Bachelor = styled.h3`
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 12px;
  letter-spacing: 1px;
  text-align: center;

  font-size: 1.4rem;
`;

const HeaderSmall = styled.h3`
  line-height: 1.2;
  margin-top: 54px;
  margin-bottom: 0px;
  letter-spacing: 1px;
  font-weight: 700;
  /* text-align: left; */
  margin-left: 20px;

  font-size: 1.25rem;
`;

const Degree = styled.h4`
  margin-top: 0px;
  line-height: 0.1;
  font-weight: 500;

  font-style: italic;
`;

const TextDiv = styled.div`
  width: auto;
  height: auto;

  background-color: #0a0d12;
  box-shadow: 5px 5px 4px #07090c;
  padding: 24px;
  padding-bottom: 14px;

  height: auto;
`;

const StyledListItem = styled.li`
  margin-bottom: 3px;
  font-size: 1.1rem;
`;

const StyledUnordered = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  margin-top: 10px;
`;

const ListItemRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  & svg {
    fill: #6812da;
    height: 16px;
    width: 16px;
    /* fill: #bda20c; */
  }
`;

function EducationComponent() {
  return (
    <StyledEducationComponent>
      <img src="/SchoolPics/kent.png" />
      <TextDiv>
        <Row>
          <LuGraduationCap />
          <Bachelor>Bachelor&apos;s Degree</Bachelor>
        </Row>
        <Degree>
          Technical and Applied Studies - Computer Applications and Development
        </Degree>

        <HeaderSmall>Course Highlights</HeaderSmall>
        <StyledUnordered>
          <ListItemRow>
            <BsFillCaretRightFill />
            <StyledListItem>
              Advanced Java, C++, Visual Basic, C#
            </StyledListItem>
          </ListItemRow>
          <ListItemRow>
            <BsFillCaretRightFill />
            <StyledListItem>Database programming</StyledListItem>
          </ListItemRow>
          <ListItemRow>
            <BsFillCaretRightFill />
            <StyledListItem>.Net Web Design</StyledListItem>
          </ListItemRow>
          <ListItemRow>
            <BsFillCaretRightFill />
            <StyledListItem>Information Security</StyledListItem>
          </ListItemRow>
          <ListItemRow>
            <BsFillCaretRightFill />
            <StyledListItem>Networking Setup and Configuration</StyledListItem>
          </ListItemRow>
        </StyledUnordered>
      </TextDiv>
    </StyledEducationComponent>
  );
}

export default EducationComponent;
