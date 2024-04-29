import styled from "styled-components";
import { linkButtonWrapper_FlexCenter } from "../styledLinkButtonBasic";

/**
 * Renders a styled NavLink button.
 *
 * Use {@link ERouteType} for correct routing. Enum comes from the router component.
 * @enum {ERouteType}
 */
export const StyledLinkButton = styled(linkButtonWrapper_FlexCenter)`
  padding: 10px;
  width: 100%;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
  color: ${(props) => props.theme.colors.common.textColorSecond};
`;
