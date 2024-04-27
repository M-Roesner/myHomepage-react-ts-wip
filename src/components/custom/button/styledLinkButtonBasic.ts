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
export const linkButtonWrapper_Default = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.common.textColor};

  background-color: ${(props) => props.theme.palette.common.backgroundColorAccent};
  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundColor_Hover};
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
export const linkButtonWrapper_FlexCenter = styled(linkButtonWrapper_Default)`
  display: flex;
  align-items: center;
  text-align: center;
`;
