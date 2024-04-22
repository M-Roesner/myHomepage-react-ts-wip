import styled from "styled-components";

export const StyledOnClickButton = styled.div`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
  background-color: ${(props) => props.theme.palette.header.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;
