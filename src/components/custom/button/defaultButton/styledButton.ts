import styled from "styled-components";

export const StyledButton = styled.div`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.palette.common.borderColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.common.backgroundHoverColor};
  }
`;
