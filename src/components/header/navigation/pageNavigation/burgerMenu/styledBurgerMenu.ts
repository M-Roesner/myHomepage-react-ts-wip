import styled, { css } from "styled-components";

interface StyledBurgerMenuItemProps {
  $isOpen: boolean;
}

export const StyledBurgerMenu = styled.div`
  cursor: pointer;
  width: 64px;
  height: 64px;

  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
  }
`;

export const StyledBurgerMenuItem = styled.span<StyledBurgerMenuItemProps>`
  width: 80%;
  height: 8%;
  background-color: ${(props) => props.theme.colors.common.borderColor};

  /* transition: all 0.3s linear;
  &:nth-child(1) {
    ${($isOpen) =>
    $isOpen
      ? css`
          transform: rotate(45deg);
          translate: 0 -50%;
        `
      : css`
          transform: rotate(0);
        `};
    // "rotate(45deg) translate(0, -50%) : "rotate(0)")}; 
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(20px)" : "translateX(0)")};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg) translate(50%, 50%)" : "rotate(0)")};
  } */
`;
