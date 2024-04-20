import React from "react";
import { StyledCardParagraph } from "./styledCardParagraph";

type CardParagraphProps = { children: React.ReactNode };

/**
 * Renders a styled p tag with a child.
 *
 * @param {SpanProps} props - The props object contains a children.
 */
const CardParagraph = ({ children }: CardParagraphProps) => {
  return <StyledCardParagraph>{children}</StyledCardParagraph>;
};

export default CardParagraph;
