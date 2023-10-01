import styled from 'styled-components';

const StyledSection = styled.section`
  /* border-top: 1px solid #262b31;
  border-bottom: 1px solid #262b31; */

  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 12.5%;
    height: 103px;
    bottom: 0;
    width: 75%; /* or 100px */
    border-bottom: 1px solid #262b31;
  }
`;

function Section({ children, bgColor, height, id }) {
  return (
    <StyledSection id={id} style={{ height: height, backgroundColor: bgColor }}>
      {children}
    </StyledSection>
  );
}

export default Section;
