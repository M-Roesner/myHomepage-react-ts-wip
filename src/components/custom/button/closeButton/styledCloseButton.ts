import styled from "styled-components";
import { StyledNormalButton_OnlyText } from "../normalButton/styledNormalButton";

export const StyledCloseButton = styled(StyledNormalButton_OnlyText)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;

  transition: all 0.5s ease-in;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent_Transparent};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  }
`;
