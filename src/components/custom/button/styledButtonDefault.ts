import { styled } from "styled-components";

/**
 * Default style for a normal buttom.
 *
 * Contains:
 * - padding, border, background-color, color, text-decoration, cursor
 * - hover style: background-color
 */
export const StyledButtonDefault = styled.button`
  padding: 10px;

  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
  background-color: ${(props) => props.theme.palette.common.backgroundColorAccent};
  color: ${(props) => props.theme.palette.common.textColor};

  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;

/**
 * Displays a button without any styles.
 */
export const StyledButtonOnlyText = styled.button`
  background: none;
  color: ${(props) => props.theme.palette.common.textColor};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.palette.common.textColorSecond};
  }
`;
