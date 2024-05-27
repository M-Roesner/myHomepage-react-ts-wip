import styled from "styled-components";

export const StyledIndex = styled.div`
  background-color: ${(props) => props.theme.colors.common.backgroundColor};
  color: ${(props) => props.theme.colors.common.textColorMain};
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => props.theme.sizes.common.fontSize};
  letter-spacing: ${(props) => props.theme.sizes.common.letterSpacing};
`;
