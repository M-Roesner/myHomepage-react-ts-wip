import React from "react";
import { StyledVerticalLineCard } from "./styledCardVerticalLine";

type CardVerticalLineProps = { children: React.ReactNode };

/**
 * Functional component for rendering a di-tag with a vertical line on the right side of the card.
 */
const CardVerticalLine = ({ children }: CardVerticalLineProps) => {
  return <StyledVerticalLineCard>{children}</StyledVerticalLineCard>;
};

export default CardVerticalLine;
