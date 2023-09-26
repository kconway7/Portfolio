import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const StyledLinkIcons = styled.div`
  display: flex;
  gap: 1rem;
  /* padding-top: 200px; */

  & svg {
    height: 1.2rem;
    width: 1.2rem;

    &:hover {
      color: purple;
    }
  }
`;

function LinkIcons() {
  return (
    <StyledLinkIcons>
      <FaGithub />
      <FaLinkedinIn />
    </StyledLinkIcons>
  );
}

export default LinkIcons;
