import React from "react";
import {
  styledCardHeadline1,
  styledCardHeadline2,
  styledCardHeadline3,
  styledCardHeadline4,
  styledCardHeadline5,
  styledCardHeadline6,
} from "./styledCardHeadline";

type CardHeadlineProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

/**
 * Diese Funktion gibt eine Referenz auf die entsprechende Styled-Card-Header-Komponente zurück,
 * basierend auf dem übergebenen Level.
 *
 * @param level - Der Header-Level, der angibt, welcher Styled-Card-Header gerendert werden soll.
 * @returns - Eine Funktionsreferenz zur entsprechenden Styled-Card-Header-Komponente.
 *
 * Diese Funktion ermöglicht eine flexible Verwendung der Styled-Card-Header-Komponenten,
 * indem sie die Funktionsreferenz zurückgibt, um die Komponente später zu rendern, wenn sie benötigt wird.
 * Dadurch wird die Komponente nicht sofort gerendert, sondern kann dynamisch basierend auf dem übergebenen Level gerendert werden.
 */
const getCardHeadlineComponent = (level: CardHeadlineProps["level"]) => {
  switch (level) {
    case 1:
      return styledCardHeadline1;
    case 2:
      return styledCardHeadline2;
    case 3:
      return styledCardHeadline3;
    case 4:
      return styledCardHeadline4;
    case 5:
      return styledCardHeadline5;
    case 6:
      return styledCardHeadline6;
    default:
      return styledCardHeadline1;
  }
};

/**
 * Renders a styled headerline card with a specified level 1-6 and any children content.
 *
 * @param {CardHeadlineProps} props - The props object contains the headerline level 1-6 and children.
 */
const CardHeadline = ({ level, children }: CardHeadlineProps) => {
  const Headerline = getCardHeadlineComponent(level);
  return <Headerline>{children}</Headerline>;
};

export default CardHeadline;
