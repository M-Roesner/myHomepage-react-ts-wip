import styled, { css } from "styled-components";

interface ProjectNavigationProps {
  $isOpen: boolean;
}

export const StyledProjectNavigation = styled.aside<ProjectNavigationProps>`
  position: relative;
  text-align: right;
  float: right;
  border: 1px solid ${(props) => props.theme.colors.common.secondary.border};
  background-color: ${(props) => props.theme.colors.common.secondary.transparent};
  overflow: hidden;

  margin-left: ${(props) => props.theme.sizes.common.paddingResponsive};
  margin-bottom: ${(props) => props.theme.sizes.common.paddingResponsive};

  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease-in-out;

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
`;

export const StyledProjectNavigationList = styled.ul<ProjectNavigationProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px;
  @media (max-width: 500px) {
    ${(props) =>
      props.$isOpen
        ? css`
            pointer-events
          `
        : css`
            pointer-events: none;
            margin-right: 0;
          `}
  }
`;

export const StyledProjectNavigationListItem = styled.li`
  text-decoration: none;
  list-style: none;
`;
