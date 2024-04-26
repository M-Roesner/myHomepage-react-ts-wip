import styled from "styled-components";

/**
 * Renders a styled p tag.
 */
export const CardParagraphStyle = styled.p`
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
