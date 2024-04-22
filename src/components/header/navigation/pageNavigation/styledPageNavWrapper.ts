import styled from "styled-components";

export const StyledPageNavWrapper = styled.nav`
  height: ${(props) => props.theme.navBar.height};
`;

export const StyledNavUnorderedList = styled.ul`
  height: inherit;
  margin-left: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  @media (min-width: 768px) {
  }
`;

export const StyledNavList = styled.li``;
