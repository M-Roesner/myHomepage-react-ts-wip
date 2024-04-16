import { Link } from "react-router-dom";
import { styled } from "styled-components";

/**
 * Styled component for customizing navigation links.
 *
 * @component
 * @param {string} to - The path to navigate to when the link is clicked.
 * @param {ReactNode} children - The content of the link.
 */
export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  width: min-content;
  height: 100%;
  padding: 10px;

  text-decoration: none;
  color: ${(props) => props.theme.palette.common.textColor};
  background-color: ${(props) => props.theme.palette.header.backgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;
