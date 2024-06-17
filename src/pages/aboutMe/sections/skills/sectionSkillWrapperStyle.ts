import styled, { css } from "styled-components";

interface ISectionSkillWrapperStyle {
  $fullSize?: boolean;
}

export const SectionSkillWrapperStyle = styled.section<ISectionSkillWrapperStyle>`
  ${(props) =>
    props.$fullSize
      ? css`
          display: flex;
          flex-direction: column-reverse;
        `
      : css`
          display: grid;
          grid-template-columns: calc(100% / 2 - 21px) 1px calc(100% / 2 - 21px);
        `}
  gap: 10px;
`;
