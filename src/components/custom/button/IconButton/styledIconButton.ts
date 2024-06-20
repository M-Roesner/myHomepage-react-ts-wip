import styled from "styled-components";

// Styled-Component
import { navLinkButtonWrapper_FlexCenter } from "../navLinkButton/styledNavLinkButton";

/**
 * Styled icon button component with circular style.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const iconButtonWrapper = styled(navLinkButtonWrapper_FlexCenter)`
  border-radius: 50%;
  padding: 10px;
  border: solid 2px ${(props) => props.theme.colors.common.action.border};
`;
