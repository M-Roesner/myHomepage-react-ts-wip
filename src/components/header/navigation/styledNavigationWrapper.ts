import { styled } from "styled-components";

export const StyledNavIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.navBar.gap};
  background-color: ${(props) => props.theme.palette.common.backgroundColor};
`;