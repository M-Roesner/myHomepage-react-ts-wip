import { NavLink } from "react-router-dom";
import styled from "styled-components";

/**
 * Default style for a NavLink buttom.
 *
 * Contains:
 * - background-color, color, text-decoration, cursor
 * - hover style: background-color
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const navLinkButtonWrapper_Default = styled(NavLink)`
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
