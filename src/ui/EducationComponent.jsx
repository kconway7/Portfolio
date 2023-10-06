import styled from 'styled-components';
import { LuGraduationCap } from 'react-icons/lu';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';

const StyledEducationComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  width: 600px;
  height: auto;
  padding: 24px 10px;

  @media only screen and (max-width: 640px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    gap: 35px;
  }

  @media only screen and (max-width: 470px) {
    width: 320px;
    padding-right: 13px;
    gap: 24px;
  }

  & img {
    width: auto;
    max-width: 580px;

    @media only screen and (max-width: 640px) {
      width: 100%;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  & svg {
    height: 38px;
    width: 38px;
    stroke: #6812da;
  }
`;

const HeaderSmall = styled.h3`
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 6px;

  font-size: 1.8rem;
`;

const Degree = styled.h4`
  margin-top: 0px;
  margin-bottom: 36px;
  padding-left: 9px;

  line-height: 1;
  font-size: 1.3rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
`;

const TextDiv = styled.div`
  width: 580px;
  height: auto;

  background-color: var(--color-charcoal-shade1);
  box-shadow: 5px 5px 4px var(--color-charcoal-shade2);
  padding: 24px;
  padding-bottom: 14px;
  padding-left: 14px;

  height: auto;

  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

const StyledListItem = styled.li`
  margin-bottom: 3px;
  font-size: 1.3rem;

  @media only screen and (max-width: 470px) {
    font-size: 0.95rem;
  }
`;

const StyledUnordered = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  margin-top: 0;
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

const CoursesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function EducationComponent() {
  return (
    <StyledEducationComponent>
      <img src="/SchoolPics/kent.png" />
      <TextDiv>
        <Row>
          <LuGraduationCap />
          <HeaderSmall>Bachelor&apos;s Degree</HeaderSmall>
        </Row>
        <Degree>Computer Applications and Development</Degree>

        <CoursesDiv>
          <Row>
            <HiOutlineBookOpen />
            <HeaderSmall>Course Highlights</HeaderSmall>
          </Row>
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
              <StyledListItem>
                Networking Setup and Configuration
              </StyledListItem>
            </ListItemRow>
          </StyledUnordered>
        </CoursesDiv>
      </TextDiv>
    </StyledEducationComponent>
  );
}

export default EducationComponent;
