import { styled } from "styled-components";

/**
 * Default style for a normal buttom.
 *
 * **This styled component should not be directly used and requires an alias when imported.**
 */
const buttonWrapper_Default = styled.button`
  text-decoration: none;
  cursor: pointer;
`;

/**
 * Displays a normal button with styles.
 *
 * Contains:
 * - padding, border, background-color, color, text-decoration, cursor
 * - hover style: background-color, color
 */
export const StyledNormalButton = styled(buttonWrapper_Default)`
  padding: 10px;

  border: 1px solid ${(props) => props.theme.colors.common.borderColor};

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  color: ${(props) => props.theme.colors.common.textColorMain};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
    color: ${(props) => props.theme.colors.common.textColorThird};
  }
`;

/**
 * Displays a button without any styles, only the color &:hover will be displayed.
 */
export const StyledNormalButton_OnlyText = styled(buttonWrapper_Default)`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin-block: auto;
  height: min-content;

  color: ${(props) => props.theme.colors.common.textColorMain};
  &:hover {
    color: ${(props) => props.theme.colors.common.textColorThird};
  }
`;
