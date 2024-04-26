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
    color: #f5f4f396;
  }
`;

export const styledCardHeadline2 = styled.h2`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: #d5d36c;
  &::after {
    content: "()";
    color: #d5d36c;
  }
`;

export const styledCardHeadline3 = styled.h3`
  ${defaultHeaderStyles};
  font-size: 1.6rem;
  color: #059f00;
  &::before {
    content: "// ";
    color: #059f00;
  }
`;

export const styledCardHeadline4 = styled.h4`
  ${defaultHeaderStyles};
  font-size: 1.4rem;
  color: #f5f4f396;
`;

export const styledCardHeadline5 = styled.h5`
  ${defaultHeaderStyles};
  font-size: 1.2rem;
  color: #f5f4f396;
`;

export const styledCardHeadline6 = styled.h6`
  ${defaultHeaderStyles};
  font-size: 1rem;
`;
