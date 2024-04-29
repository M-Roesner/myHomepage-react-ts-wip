import styled from "styled-components";
import { linkButtonWrapper_Default } from "../styledLinkButtonBasic";

/**
 * Renders a normal styled NavLink button.
 *
 * Use {@link ERouteType} for correct routing. Enum comes from the router component.
 * @enum {ERouteType}
 */
export const StyledNormalButton = styled(linkButtonWrapper_Default)`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};

  &.active {
    background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight};
    color: ${(props) => props.theme.colors.common.textColorSecond};
  }
  &.active:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Hover};
    color: ${(props) => props.theme.colors.common.textColorSecond};
  }
`;
