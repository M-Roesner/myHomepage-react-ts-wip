import { styled } from "styled-components";

export const StyledNavIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.sizes.navBar.gap};

  @media (max-width: 700px) {
    flex-direction: row-reverse;
  }
`;
