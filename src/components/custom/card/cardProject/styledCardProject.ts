import styled from "styled-components";
import { NavLinkButtonWrapperType, navLinkButtonWrapper_Default } from "../../button/navLinkButton/styledNavLinkButton";

/**
 * Styled component for wrapping NavLink buttons, inheriting properties and styles from the default NavLink button wrapper.
 *
 * Applies default styling for NavLink button wrapper and allows customization of the display property through props.
 *
 * @param $display - Optional prop to set the display style of the NavLink button wrapper. Defaults to "inline".
 * Example usage: `display: ${(props) => props.$display || "inline"};`
 */
export const StyledCardProject_NavLink = styled(navLinkButtonWrapper_Default)<NavLinkButtonWrapperType>`
  display: ${(props) => props.$display || "inline"};
  padding: 10px;
  text-align: center;
  border: solid 1px ${(props) => props.theme.colors.common.borderColor};

  :first-child {
    margin-top: 0;
  }
`;
