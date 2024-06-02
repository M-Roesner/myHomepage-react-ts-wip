import styled from "styled-components";

/**
 * Renders a styled p tag.
 *
 * @prop {boolean} $isFootnote (optional) If $isFootnote is not set, the normal size is used.
 *
 * Contains:
 * - padding &:first-child &:last-child
 */
export const CardParagraph = styled.p<{ $isFootnote?: boolean }>`
  padding-bottom: 2ch;
  font-size: ${(props) =>
    props.$isFootnote ? props.theme.sizes.common.fontSizeAsFootnote : props.theme.sizes.common.fontSize};

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
