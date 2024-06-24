import styled, { css } from "styled-components";

interface SideNavigationProps {
  $isOpen: boolean;
}

export const StyledSideNavigation = styled.aside<SideNavigationProps>`
  position: relative;
  text-align: right;
  float: right;
  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
  background-color: ${(props) => props.theme.colors.common.secondary.transparent};
  overflow: hidden;

  margin-left: ${(props) => props.theme.sizes.common.paddingResponsive};
  margin-bottom: ${(props) => props.theme.sizes.common.paddingResponsive};

  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease-in-out; // Note: Pay attention to this transition for animation and scroll behavior

  @media (max-width: 500px) {
    ${(props) =>
      props.$isOpen
        ? css`
            width: 100%;
            border-radius: 10px;
            margin-bottom: 5px;
          `
        : css`
            width: 50px;
            cursor: pointer;
            &:hover {
              background-color: ${(props) => props.theme.colors.common.action.hover};
            }
          `}
  }

  z-index: ${(props) => props.theme.zIndex.navBar_Aside};
  &:after {
    content: "";
    clear: both;
  }
`;

export const StyledSideNavigationList = styled.ul<SideNavigationProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px;
  @media (max-width: 500px) {
    ${(props) =>
      !props.$isOpen &&
      css`
        pointer-events: none;
        margin-right: 0;
      `}
  }
`;

export const StyledSideNavigationListItem = styled.li`
  text-decoration: none;
  list-style: none;
`;
