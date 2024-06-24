import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStyledSideNavigationButton {
  $textAlign: "center" | "left" | "right";
}
export const StyledSideNavigationButton = styled(Link)<IStyledSideNavigationButton>`
  text-decoration: none;
  display: block;

  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  border: 1px solid ${(props) => props.theme.colors.common.action.border};

  background-color: ${(props) => props.theme.colors.common.action.default};
  color: ${(props) => props.theme.colors.common.text.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.hover};
    color: ${(props) => props.theme.colors.common.text.lightOnDark};
  }

  text-align: ${(props) => props.$textAlign};
  /* transition: text-align 5s ease-in-out; // Does currently not work. */

  white-space: nowrap;
`;
