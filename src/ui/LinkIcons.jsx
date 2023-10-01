import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const StyledLinkIcons = styled.div`
  display: flex;
  gap: 1rem;

  & svg {
    height: 1.2rem;
    width: 1.2rem;

    transition: ease-in-out;
    transition-duration: 200ms;
    cursor: pointer;

    &:hover {
      fill: #6812da;
    }
  }
`;

function LinkIcons() {
  return (
    <StyledLinkIcons>
      <a href="https://github.com/kconway7">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/keddy-conway-572a2b1b5/">
        <FaLinkedinIn />
      </a>
    </StyledLinkIcons>
  );
}

export default LinkIcons;
