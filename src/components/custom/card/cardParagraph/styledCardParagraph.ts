import styled from "styled-components";

/**
 * Renders a styled p tag.
 *
 * Contains:
 * - padding &:first-child &:last-child
 */
export const StyledCardParagraph = styled.p`
  padding-bottom: clamp(1ch, 1vw, 2ch);
  word-wrap: break-word;
  /* hyphens: auto; */

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
