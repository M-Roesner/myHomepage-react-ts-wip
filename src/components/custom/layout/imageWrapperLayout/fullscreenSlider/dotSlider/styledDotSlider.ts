import styled from "styled-components";

export const DotSliderWrapper = styled.div`
  text-align: center;
`;

export const StyledDot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;

  border: 1px solid ${(props) => props.theme.colors.common.borderColor};

  transition: background-color 0.5s ease-in;
  background-color: ${(props) => props.theme.colors.common.backgroundColorAccent};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.backgroundColor_Hover};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight};
    &:hover {
      background-color: ${(props) => props.theme.colors.common.backgroundColorHighlight_Hover};
    }
  }
`;
