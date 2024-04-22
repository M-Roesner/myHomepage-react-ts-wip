import { styled } from "styled-components";

// Styled-Component
import { slyledLinkButtonBasic } from "../styledLinkButtonBasic";

/**
 * Styled component for customizing navigation links.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {ReactNode} props.children - The content of the link.
 */
export const StyledNavbarButton = styled(slyledLinkButtonBasic)`
  --min-padding: 10px;
  --max-padding: 20px;

  white-space: nowrap;
  width: min-content;
  height: 100%;
  padding: 10px clamp(var(--min-padding), 2vw, var(--max-padding));

  &.active {
    background-color: ${(props) => props.theme.palette.common.backgroundColor};
  }
`;

export const StyledNavbarButtonWrap = styled(StyledNavbarButton)`
  white-space: normal; // "normal" - makes an automatic line break
`;
