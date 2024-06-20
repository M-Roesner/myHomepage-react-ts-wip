import styled from "styled-components";

export const StyledCloseButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;

  transition: all 0.5s ease-in;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme.colors.common.text.primary};
  background-color: ${(props) => props.theme.colors.common.action.transparent};
  &:hover {
    color: ${(props) => props.theme.colors.common.text.lightOnDark};
    background-color: ${(props) => props.theme.colors.common.action.hover};
  }
`;
