import styled from "styled-components";

export const StyledProgressBarWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  border: 1px solid ${(props) => props.theme.colors.progressBar.backgroundColor};
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface StyledProgressFillProps {
  $progressInPercent: number;
}
export const StyledProgressFill = styled.div<StyledProgressFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$progressInPercent}%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.progressBar.backgroundColor};
  border-radius: 5px;
`;

export const StyledProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.progressBar.color};
`;
