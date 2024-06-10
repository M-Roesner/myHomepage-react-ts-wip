import styled from "styled-components";

/**
 * Renders a styled p tag.
 *
 * Contains:
 * - padding &:first-child &:last-child
 */
export const StyledCardParagraph = styled.p`
  padding-bottom: 2ch;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
