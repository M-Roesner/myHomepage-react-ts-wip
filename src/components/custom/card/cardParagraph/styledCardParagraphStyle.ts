import styled from "styled-components";

/**
 * Renders a styled p tag.
 *
 * @prop {string} $size (optional) If the size is not set, the normal size is used.
 *
 * Contains:
 * - padding &:first-child &:last-child
 */
// export const CardParagraphStyle = styled.p.attrs((/* props */) => ({ tabIndex: 0 }))`
export const CardParagraphStyle = styled.p.attrs<{ $size?: string }>((props) => ({
  // or we can define dynamic ones
  $size: props.$size || props.theme.sizes.common.fontSize,
}))`
  padding-bottom: 2ch;
  font-size: ${(props) => props.$size};

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
