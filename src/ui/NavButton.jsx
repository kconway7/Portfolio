import styled from 'styled-components';

const NavButton = styled.a`
  display: flex;
  text-align: left;
  align-items: center;
  background: none;
  color: var(--color-text-main);
  cursor: pointer;

  border: none;
  border-bottom: 1px solid var(--color-charcoal-tint1);
  padding: 0.8rem;
  width: 280px;

  font-size: 1.3rem;
  line-height: 1.6;
  font-weight: 300;
  gap: 0.8rem;

  transition: ease-in-out;
  transition-duration: 200ms;
  text-decoration: none;

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: white;
    margin-left: 0.6rem;
    transition: ease-in-out;
    transition-duration: 200ms;
  }

  &:hover {
    & svg {
      fill: #6812da;
    }

    font-weight: 800;
    color: #6812da;
  }
`;

export default NavButton;
