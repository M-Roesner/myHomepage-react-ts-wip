import React from "react";

// Components
import CardHeadline from "../../card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../card/cardVerticalLine/styledCardVerticalLineStyle";

type SectionLayoutProps = {
  headlineText: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Layout component for the section, which includes the headline text <h2> and children.
 *
 * Includes a specific style!
 *
 * @param {object} props - The props for the PageLayout component.
 * @param {string} props.headlineText - The text for the headline.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout with a specific style.
 * @returns {JSX.Element} - Returns the JSX for the PageLayout component.
 */
const SectionLayout = ({ headlineText, children }: SectionLayoutProps): JSX.Element => {
  return (
    <section>
      <CardHeadline level={2}>{headlineText}</CardHeadline>
      <CardVerticalLineStyle>{children}</CardVerticalLineStyle>
    </section>
  );
};

export default SectionLayout;
