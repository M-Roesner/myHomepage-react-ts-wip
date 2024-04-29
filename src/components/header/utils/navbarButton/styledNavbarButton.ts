import { styled } from "styled-components";

// Styled-Component
import { linkButtonWrapper_FlexCenter } from "../../../custom/button/styledLinkButtonBasic";

/**
 * Navbar button component without content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const styledNavbarButton = styled(linkButtonWrapper_FlexCenter)`
  --min-padding: 10px;
  --max-padding: 20px;

  white-space: nowrap;
  width: min-content;
  height: 100%;
  padding: 10px clamp(var(--min-padding), 2vw, var(--max-padding));

  &.active {
    background-color: ${(props) => props.theme.colors.common.backgroundColor};
    &:hover {
      background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
    }
  }
`;

/**
 * Navbar button component with content line break.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
export const styledNavbarButtonWrap = styled(styledNavbarButton)`
  white-space: normal; // "normal" - makes an automatic line break
`;
