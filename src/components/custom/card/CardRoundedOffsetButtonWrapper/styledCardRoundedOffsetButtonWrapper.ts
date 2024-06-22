import styled, { css } from "styled-components";

// Type
import { OffsetButtonWrapper_DirectionType } from "./roundedButtonType";

export const StyledCardRoundedOffsetButtonWrapper = styled.div<{
  $direction: OffsetButtonWrapper_DirectionType;
}>`
  display: flex;
  ${(props) =>
    props.$direction === "column"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
`;
