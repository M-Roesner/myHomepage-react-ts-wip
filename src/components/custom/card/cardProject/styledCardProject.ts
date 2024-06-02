import styled from "styled-components";
import { navLinkButtonWrapper_Default } from "../../button/navLinkButton/styledNavLinkButton";

/**
 * Returns a styled navigation link for the project card.
 *
 * It can be used as a NavLink component.
 */
export const StyledCardProject_NavLink = styled(navLinkButtonWrapper_Default)`
  padding: 10px;
  text-align: center;
  border: solid 1px ${(props) => props.theme.colors.common.borderColor};

  :first-child {
    margin-top: 0;
  }
`;
