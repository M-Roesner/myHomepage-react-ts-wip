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

  border: 1px solid ${(props) => props.theme.colors.common.action.border};

  transition: background-color 0.5s ease-in;
  background-color: ${(props) => props.theme.colors.common.action.default};
  &:hover {
    background-color: ${(props) => props.theme.colors.common.action.hover};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.common.action.active};
    &:hover {
      background-color: ${(props) => props.theme.colors.common.action.activeHover};
    }
  }
`;
