import { styled } from "styled-components";

const buttonDefaultStyle = styled.button`
  text-decoration: none;
  cursor: pointer;
`;

/**
 * Default style for a normal buttom.
 *
 * Contains:
 * - padding, border, background-color, color, text-decoration, cursor
 * - hover style: background-color
 */
export const StyledButtonDefault = styled(buttonDefaultStyle)`
  padding: 10px;

  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
  background-color: ${(props) => props.theme.palette.common.backgroundColorAccent};
  color: ${(props) => props.theme.palette.common.textColor};

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundColor_Hover};
  }
`;

/**
 * Displays a button without any styles, only the color&:hover will be displayed.
 */
export const StyledButtonOnlyText = styled(buttonDefaultStyle)`
  background: none;
  border: none;
  outline: none;
  padding: 0;

  color: ${(props) => props.theme.palette.common.textColor};
  &:hover {
    color: ${(props) => props.theme.palette.common.textColorSecond};
  }
`;
