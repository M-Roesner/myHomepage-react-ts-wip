import styled, { css } from "styled-components";

interface StyledCardRoundedOffsetButtonWrapperProps {
  $isMobile: boolean;
}

export const StyledCardRoundedOffsetButtonWrapper = styled.div<StyledCardRoundedOffsetButtonWrapperProps>`
  display: flex;
  ${(props) =>
    props.$isMobile
      ? css`
          flex-wrap: nowrap;
          flex-direction: column;
          gap: ${(props) => props.theme.sizes.common.gap};
        `
      : css`
          flex-direction: row;
        `}
`;
