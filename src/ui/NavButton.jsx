import styled from 'styled-components';

const NavButton = styled.button`
  display: flex;
  text-align: left;
  align-items: center;
  background: none;
  color: white;
  cursor: pointer;

  border: none;
  border-bottom: 1px solid #262b31;
  padding: 0.8rem;
  width: 250px;

  font-size: 1.3rem;
  line-height: 1.6;
  font-weight: lighter;
  gap: 0.8rem;

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: white;
    margin-left: 0.6rem;
  }

  &:hover {
    & svg {
      color: #6812da;
    }

    font-weight: 600;
    color: #6812da;
  }
`;

export default NavButton;
