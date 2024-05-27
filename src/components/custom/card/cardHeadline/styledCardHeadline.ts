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
  font-size: 2rem;
  &::after {
    content: "{}";
    color: ${(props) => props.theme.colors.common.textColorMain};
  }
`;

export const styledCardHeadline2 = styled.h2`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.headline.textColor_level2};
  &::before {
    content: "// ";
  }
`;

export const styledCardHeadline3 = styled.h3`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.common.textColorThird};
`;

export const styledCardHeadline4 = styled.h4`
  ${defaultHeaderStyles};
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.common.textColorSecond};
`;

export const styledCardHeadline5 = styled.h5`
  ${defaultHeaderStyles};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.common.textColorSecond};
`;

export const styledCardHeadline6 = styled.h6`
  ${defaultHeaderStyles};
  font-size: 1rem;
`;
