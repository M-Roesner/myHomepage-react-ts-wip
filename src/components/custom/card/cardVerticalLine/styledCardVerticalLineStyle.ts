import styled from "styled-components";

/**
 * Renders a styled div tag with a vertical line as a border on the left side and padding on the left side.
 */
export const CardVerticalLineStyle = styled.div`
  border-left: solid 1px ${(props) => props.theme.colors.common.borderColor};
  padding-left: ${(props) => props.theme.sizes.common.paddingResponsive};
`;

/**
 * Renders a styled span tag with a vertical line as a border on the left side.
 */
export const CardVerticalLineStyleAsSpan = styled.span`
  display: block;
  width: 1px;
  background-color: ${(props) => props.theme.colors.common.borderColor};
`;
