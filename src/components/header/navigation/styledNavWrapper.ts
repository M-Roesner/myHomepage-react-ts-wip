import styled from "styled-components";

export const StyledNavWrapper = styled.nav`
  background-color: ${(props) => props.theme.palette.common.backgroundColor};
`;

export const StyledNavUnorderedList = styled.ul`
  margin-left: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
  @media (min-width: 768px) {
  }
`;
