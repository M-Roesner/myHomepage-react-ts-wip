import { styled } from "styled-components";

// Styled-Component
import { slyledLinkButtonBasic } from "./styledLinkButtonBasic";

/**
 * Styled component for customizing navigation links.
 *
 * @component
 * @param {string} to - The path to navigate to when the link is clicked.
 * @param {ReactNode} children - The content of the link.
 */
export const StyledNavLink = styled(slyledLinkButtonBasic)`
  --min-padding: 10px;
  --max-padding: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  width: min-content;
  height: 100%;
  padding: 10px clamp(var(--min-padding), 2vw, var(--max-padding));
`;
