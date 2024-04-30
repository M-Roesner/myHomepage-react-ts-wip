import styled from "styled-components";

/**
 * Renders a styled div tag with a vertical line as a border on the left side and padding on the left side.
 */
export const CardVerticalLineStyle = styled.div`
  border-left: solid 1px ${(props) => props.theme.colors.common.borderColor};
  padding-left: 1vw;
`;

/**
 * Renders a styled span tag with a vertical line as a border on the left side.
 */
export const CardVerticalLineStyleAsSpan = styled.span`
  border-left: solid 1px ${(props) => props.theme.colors.common.borderColor};
`;
