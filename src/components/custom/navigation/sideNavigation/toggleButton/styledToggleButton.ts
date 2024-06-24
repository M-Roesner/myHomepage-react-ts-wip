import styled from "styled-components";

interface IStyledToggleButton {
  $isOpen: boolean;
}

export const StyledToggleButton = styled.div<IStyledToggleButton>`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.common.action.active};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.hover};
  }
`;
