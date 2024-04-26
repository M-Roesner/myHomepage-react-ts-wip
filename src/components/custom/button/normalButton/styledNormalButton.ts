import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNormalButton = styled(NavLink)`
  padding: 10px;

  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
  background-color: ${(props) => props.theme.palette.common.backgroundColorAccent};
  color: ${(props) => props.theme.palette.common.textColor};

  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }

  &.active {
    // TODO: CSS set an active style in the theme to determine whether a hover or active style is visible.
    background-color: red;
  }
`;
