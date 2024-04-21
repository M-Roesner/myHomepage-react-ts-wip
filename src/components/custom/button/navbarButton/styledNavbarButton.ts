import { styled } from "styled-components";

// Styled-Component
import { slyledLinkButtonBasic } from "../styledLinkButtonBasic";

/**
 * Props that can be used with the StyledNavLink component.
 */
interface StyledNavLinkProps {
  /** Determines whether automatic line wrapping should be enabled for the content. */
  autoWrap?: boolean;
}

/**
 * Styled component for customizing navigation links.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.to - The path to navigate to when the link is clicked.
 * @param {boolean} props.autoWrap - Enables automatic line break for content if true; otherwise, disables it.
 * @param {ReactNode} props.children - The content of the link.
 */
export const StyledNavbarButton = styled(slyledLinkButtonBasic)<StyledNavLinkProps>`
  --min-padding: 10px;
  --max-padding: 20px;

  white-space: ${(props) => (props.autoWrap ? "normal" : "nowrap")}; // "normal" - makes an automatic line break
  width: min-content;
  height: 100%;
  padding: 10px clamp(var(--min-padding), 2vw, var(--max-padding));

  &.active {
    background-color: ${(props) => props.theme.palette.common.backgroundColor};
  }
`;
