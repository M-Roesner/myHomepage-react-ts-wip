import styled, { css } from "styled-components";

interface ISectionSkillWrapperStyle {
  $isMobile: boolean;
}
export const StyledSkillDescription = styled.div<ISectionSkillWrapperStyle>`
  ${(props) =>
    props.$isMobile
      ? css`
          border: 1px solid ${(props) => props.theme.colors.common.borderColor};
        `
      : ""}
  padding: 5px;
`;
