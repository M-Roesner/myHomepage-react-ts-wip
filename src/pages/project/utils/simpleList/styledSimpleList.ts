import styled from "styled-components";

export const StyledSimpleList = styled.ul`
  /* list-style-position: inside; */
  /* list-style-type: circle; */

  list-style: none;
  padding-left: 20px;

  & li {
    position: relative;
    margin-bottom: 5px;
  }

  & li::before {
    content: "•";
    position: absolute;
    left: -20px;
    font-size: 1.2em;
    line-height: 1;
  }
`;
