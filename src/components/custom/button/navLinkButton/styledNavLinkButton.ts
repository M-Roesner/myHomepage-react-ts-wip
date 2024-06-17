import styled from "styled-components";
import { NavLink } from "react-router-dom";

export type NavLinkButtonWrapperType = {
  $display?: "inline" | "block";
};

/**
 * Default style for a NavLink button wrapper.
 *
 * Contains:
 * - background-color, color, text-decoration, cursor
 * - hover style: background-color
 *
 * @param $display - Optional prop to set the display style of the NavLink button wrapper. Defaults to "inline".
 * Example usage: `display: ${(props) => props.$display || "inline"};`
 *
 * Ensure to utilize the exported type `NavLinkButtonWrapperType` for correct typing.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const navLinkButtonWrapper_Default = styled(NavLink)<NavLinkButtonWrapperType>`
  display: ${(props) => props.$display || "inline"};
  text-decoration: none;

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  color: ${(props) => props.theme.colors.common.textColorMain};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight};
    color: ${(props) => props.theme.colors.common.textColorSecond};
  }
  &.active:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Hover};
    color: ${(props) => props.theme.colors.common.textColorSecond};
  }
`;

/**
 * Special NavLink button with display flex.
 *
 * Contains:
 * - display: flex;
 * - align-items: center;
 * - text-align: center;
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const navLinkButtonWrapper_FlexCenter = styled(navLinkButtonWrapper_Default)`
  display: flex;
  align-items: center;
  text-align: center;
`;

/**
 * Renders a styled NavLink button.
 *
 * Use {@link ERouteType} for correct routing. Enum comes from the router component.
 * @enum {ERouteType}
 */
export const StyledNavLinkButton = styled(navLinkButtonWrapper_FlexCenter)`
  padding: ${(props) => props.theme.sizes.button.padding};
  width: 100%;
  gap: ${(props) => props.theme.sizes.common.gap};
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
  color: ${(props) => props.theme.colors.common.textColorSecond};

  // Hight: Ensures that the button has the same height as the other child elements within a list.
  height: 100%;
`;
