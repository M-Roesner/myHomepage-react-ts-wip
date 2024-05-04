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
  gap: ${(props) => props.theme.sizes.common.gap};
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.common.borderColor};
  color: ${(props) => props.theme.colors.common.textColorSecond};

  // Hight: Ensures that the button has the same height as the other child elements within a list.
  height: 100%;
`;
