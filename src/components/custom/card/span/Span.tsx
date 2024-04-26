import React from "react";
import { styledSpan as StyledSpan } from "./styledSpan";

type SpanProps = {
  title: string;
  children: React.ReactNode;
};

/**
 * Renders a styled span tag with a title and a child.
 * Additionally, there is a white space at the beginning and end of the span tag.
 *
 * @param {SpanProps} props - The props object contains the title and children.
 */
const Span = ({ title, children }: SpanProps) => {
  return (
    <>
      {" "}
      <StyledSpan title={title}>{children}</StyledSpan>{" "}
    </>
  );
};

export default Span;
