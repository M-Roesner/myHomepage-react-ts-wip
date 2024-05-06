import React from "react";

// Components
import CardHeadline from "../../card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../card/cardVerticalLine/styledCardVerticalLineStyle";

type SectionLayoutProps = {
  headlineText: React.ReactNode;
  tagId?: string;
  children: React.ReactNode;
};

/**
 * Layout component for the section, which includes the headline text <h2> and children.
 *
 * Includes a specific style!
 *
 * @param {object} props - The props for the PageLayout component.
 * @param {string} props.headlineText - The text for the headline.
 * @param {string} props.tagId - (Optional) Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout with a specific style.
 * @returns {JSX.Element} - Returns the JSX for the PageLayout component.
 */
const SectionLayout = ({ headlineText, tagId, children }: SectionLayoutProps): JSX.Element => {
  return (
    <section id={tagId}>
      <CardHeadline level={2}>{headlineText}</CardHeadline>
      <CardVerticalLineStyle>{children}</CardVerticalLineStyle>
    </section>
  );
};

export default SectionLayout;
