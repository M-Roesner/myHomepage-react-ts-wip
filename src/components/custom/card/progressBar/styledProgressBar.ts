import styled from "styled-components";

export const StyledProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  border: 1px solid ${(props) => props.theme.colors.common.action.border};
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface StyledProgressFillProps {
  $progressInPercent: number;
  $isVisible: boolean;
}
export const StyledProgressFill = styled.div<StyledProgressFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.common.action.default};
  border-radius: 5px;

  width: ${(props) => (props.$isVisible ? `${props.$progressInPercent}%` : "0%")};
  transition: width 2s linear;
`;

export const StyledProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.common.text.lightOnDark};
`;
