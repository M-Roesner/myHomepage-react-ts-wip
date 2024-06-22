import styled, { css } from "styled-components";
import { OffsetButtonWrapper_DirectionType } from "../../../../../../components/custom/card/CardRoundedOffsetButtonWrapper/roundedButtonType";

export const StyledSkillsNavigation = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

export const $extraStyle_OffsetButtonWrapper = css<{ $direction: OffsetButtonWrapper_DirectionType }>`
  ${(props) =>
    props.$direction === "row"
      ? css`
          margin-inline: 5px;
        `
      : css`
          margin-block: 5px;
        `}
`;

export const $exraStyle_ListLayout = css`
  background-color: ${(props) => props.theme.colors.common.secondary.transparent};
  border: 1px solid ${(props) => props.theme.colors.common.secondary.default};
  border-radius: 5px;
`;
