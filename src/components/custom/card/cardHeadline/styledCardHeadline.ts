import styled, { css } from "styled-components";

const defaultHeaderStyles = css`
  // font-weight: 200;
  // font-style: normal;
  line-height: 3ch;
  margin-block: 1ch;
`;

// TODO: header styles ... content, color ...
export const styledCardHeadline1 = styled.h1`
  ${defaultHeaderStyles};
  color: ${(props) => props.theme.colors.headline.textColor_level1};
  /* font-size: 2rem; */
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: clamp(2ch, 3vw, 3ch);
  margin-block: clamp(1ch, 1vw, 1ch);
  &::after {
    content: "{}";
    color: ${(props) => props.theme.colors.common.text.secondary};
  }
`;

export const styledCardHeadline2 = styled.h2`
  ${defaultHeaderStyles};
  /* font-size: 1.6rem; */
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: clamp(2ch, 3vw, 3ch);
  margin-block: clamp(1ch, 1vw, 1ch);
  color: ${(props) => props.theme.colors.headline.textColor_level2};
  &::before {
    content: "// ";
  }
`;

export const styledCardHeadline3 = styled.h3`
  ${defaultHeaderStyles};
  /* font-size: 1.6rem; */
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  line-height: clamp(2ch, 3vw, 3ch);
  margin-block: clamp(1ch, 1vw, 1ch);
  color: ${(props) => props.theme.colors.headline.textColor_level_other};
  font-weight: 600;
`;

export const styledCardHeadline4 = styled.h4`
  ${defaultHeaderStyles};
  /* font-size: 1.4rem; */
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: clamp(2ch, 3vw, 3ch);
  margin-block: clamp(1ch, 1vw, 1ch);
  color: ${(props) => props.theme.colors.headline.textColor_level_other};
  font-weight: 600;
`;

export const styledCardHeadline5 = styled.h5`
  ${defaultHeaderStyles};
  /* font-size: 1.2rem; */
  font-size: clamp(1.1rem, 1.5vw, 1.2rem);
  line-height: clamp(2ch, 3vw, 3ch);
  margin-block: clamp(1ch, 1vw, 1ch);
  color: ${(props) => props.theme.colors.headline.textColor_level_other};
  font-weight: 600;
`;

export const styledCardHeadline6 = styled.h6`
  ${defaultHeaderStyles};
  font-size: 1rem;
`;
