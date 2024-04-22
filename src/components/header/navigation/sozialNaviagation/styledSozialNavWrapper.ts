import styled from "styled-components";

export const StyledSozialNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.sizes.navBar.gap};
  padding: 10px;
`;
