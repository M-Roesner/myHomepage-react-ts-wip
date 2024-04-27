import styled from "styled-components";

const defaultHeaderStyles = `
// font-weight: 200;
// font-style: normal;
line-height: 3ch;
margin-block: 1ch;
`;

// TODO: header styles ... content, color ...
export const styledCardHeadline1 = styled.h1`
  ${defaultHeaderStyles};
  color: #5893c4;
  font-size: 2rem;
  &::after {
    content: "{}";
    color: ${(props) => props.theme.palette.common.textColorMain};
  }
`;

export const styledCardHeadline2 = styled.h2`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: #91a187;
  &::before {
    content: "// ";
  }
`;

export const styledCardHeadline3 = styled.h3`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.common.textColorThird};
`;

export const styledCardHeadline4 = styled.h4`
  ${defaultHeaderStyles};
  margin-block: 0;
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.common.textColorSecond};
`;

export const styledCardHeadline5 = styled.h5`
  ${defaultHeaderStyles};
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette.common.textColorSecond};
`;

export const styledCardHeadline6 = styled.h6`
  ${defaultHeaderStyles};
  font-size: 1rem;
`;
