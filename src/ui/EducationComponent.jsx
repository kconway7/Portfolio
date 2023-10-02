import styled from 'styled-components';

const StyledEducationComponent = styled.div`
  width: 500px;
  height: 240px;
  background-color: #0a0d12;
`;

const Row = styled.div`
  display: flex;
`;

function EducationComponent() {
  return (
    <StyledEducationComponent>
      <h3>University</h3>
      <Row>
        <img src="ProjectPlaceHolder.png" />
      </Row>
    </StyledEducationComponent>
  );
}

export default EducationComponent;
