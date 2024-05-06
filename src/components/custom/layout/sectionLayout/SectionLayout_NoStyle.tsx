import React from "react";

// Components
import CardHeadline from "../../card/cardHeadline/CardHeadline";

type SectionLayout_NoStyleProps = {
  headlineText: React.ReactNode;
  tagId?: string;
  children: React.ReactNode;
};

/**
 * Layout component for the section, which includes the headline text <h2> and children.
 *
 * No speacial style is used!
 *
 * @param {object} props - The props for the PageLayout component.
 * @param {string} props.headlineText - The text for the headline.
 * @param {string} props.tagId - (Optional) Unique identifier for direct navigation via the URL to the corresponding "#tagId" section.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @returns {JSX.Element} - Returns the JSX for the PageLayout component.
 */
const SectionLayout_NoStyle = ({ headlineText, tagId, children }: SectionLayout_NoStyleProps): JSX.Element => {
  return (
    <section id={tagId}>
      <CardHeadline level={2}>{headlineText}</CardHeadline>
      {children}
    </section>
  );
};

export default SectionLayout_NoStyle;
