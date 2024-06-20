import styled from "styled-components";

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: ${(props) => props.theme.sizes.footer.height};
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const StyledButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.common.secondary.default};
  border-radius: 10px 10px 0 0;
`;
