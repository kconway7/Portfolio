import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  padding-bottom: 80px;
  display: block;

  &:after {
    content: '';
    position: absolute;
    left: 12.5%;
    bottom: 0;
    width: 75%;
    border-bottom: 1px solid var(--color-charcoal-tint1);
  }
`;

function Section({ children, bgColor, height = 'auto', id }) {
  return (
    <StyledSection id={id} style={{ height: height, backgroundColor: bgColor }}>
      {children}
    </StyledSection>
  );
}

export default Section;
