import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const slyledLinkButtonBasic = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.common.textColor};

  background-color: ${(props) => props.theme.palette.header.backgroundColor};
  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;
