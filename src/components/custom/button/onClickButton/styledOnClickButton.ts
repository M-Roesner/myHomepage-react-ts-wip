import styled from "styled-components";
import { StyledButtonDefault } from "../styledButtonDefault";

export const StyledOnClickButton = styled(StyledButtonDefault)`
  &.active {
    // TODO: CSS set an active style in the theme to determine whether a hover or active style is visible.
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;
