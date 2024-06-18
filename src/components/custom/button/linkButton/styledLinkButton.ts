import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Renders a styled Link button.
 *
 * Contains:
 * - background-color, color, border, padding, text-decoration, cursor
 * - hover style: background-color
 *
 * Use {@link ERouteType} for correct routing. Enum comes from the router component.
 * @enum {ERouteType}
 */
export const StyledLinkButton = styled(Link)`
  text-decoration: none;
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  color: ${(props) => props.theme.colors.common.textColorMain};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
  }
`;
