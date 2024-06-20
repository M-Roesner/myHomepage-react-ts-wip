import { styled } from "styled-components";

/**
 * Default style for a normal buttom.
 *
 * Cnatains:
 * - text-decoration: none;
 * - cursor: pointer;
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
  padding: ${(props) => props.theme.sizes.common.paddingResponsive};

  border: 1px solid ${(props) => props.theme.colors.common.action.border};

  background-color: ${(props) => props.theme.colors.common.action.default};
  color: ${(props) => props.theme.colors.common.text.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.hover};
    color: ${(props) => props.theme.colors.common.text.lightOnDark};
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

  color: ${(props) => props.theme.colors.common.action.active};
  &:hover {
    color: ${(props) => props.theme.colors.common.text.aczent};
  }
`;
