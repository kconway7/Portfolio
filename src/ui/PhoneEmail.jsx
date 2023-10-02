import styled from 'styled-components';
import { FiPhone, FiMail } from 'react-icons/fi';

const StyledPhoneEmail = styled.div`
  background-color: #0a0d12;
  width: 1000px;
  height: 70px;
  box-shadow: 5px 5px 3px #07090c;

  margin-bottom: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInfo = styled.div`
  display: flex;
  width: 460px;
  align-items: center;
  gap: 24px;
  margin-left: 24px;

  & svg {
    height: 32px;
    width: 32px;
    stroke: #6812da;
  }
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  letter-spacing: 2px;
`;

function PhoneEmail() {
  return (
    <StyledPhoneEmail>
      <StyledInfo>
        <FiPhone />
        <StyledP>(330)-357-9260</StyledP>
      </StyledInfo>
      <StyledInfo>
        <FiMail />
        <StyledP>keddyconway59@gmail.com</StyledP>
      </StyledInfo>
    </StyledPhoneEmail>
  );
}

export default PhoneEmail;
