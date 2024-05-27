import styled from "styled-components";

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: ${(props) => props.theme.sizes.footer.height};
  width: 100%;

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};

  display: flex;
  justify-content: center;
  align-items: center;
`;
