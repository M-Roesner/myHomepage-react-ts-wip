import styled from "styled-components";
interface StyledCardFootnoteProps {
  symbol?: string;
}

/**
 * Renders a styled p tag specifically for footnotes.
 *
 * @param {string} symbol (optional) The special symbol to be displayed before the text.
 */
export const StyledCardFootnote = styled.span<StyledCardFootnoteProps>`
  font-size: ${(props) => props.theme.sizes.common.fontSizeAsFootnote};
  position: relative;
  padding-left: ${(props) => (props.symbol ? "2ch" : "0")};

  &:before {
    content: "${(props) => props.symbol || ""}";
    position: absolute;
    left: 0;
    top: -0.5em; /* Adjust this value to position the symbol properly */
    font-size: 80%; /* Adjust this value to make the symbol smaller */
  }
`;
