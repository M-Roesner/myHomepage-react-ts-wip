import styled from "styled-components";

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.navBar.gap};
  padding: 10px;
`;
