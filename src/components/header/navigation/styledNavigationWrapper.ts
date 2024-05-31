import { styled } from "styled-components";

export const StyledNavIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.sizes.navBar.gap};
  background-color: ${(props) => props.theme.colors.common.backgroundColor};

  @media (max-width: 700px) {
    flex-direction: row-reverse;
  }
`;
