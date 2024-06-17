import React from "react";

// Components
import CardHeadline from "../../card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../card/cardVerticalLine/styledCardVerticalLineStyle";

type PageLayoutProps = {
  headlineText: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Layout component for the page, which includes the headline text and children.
 *
 * @param {object} props - The props for the PageLayout component.
 * @param {string} props.headlineText - The text for the headline.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @returns {JSX.Element} - Returns the JSX for the PageLayout component.
 */
const PageLayout = ({ headlineText, children }: PageLayoutProps): JSX.Element => {
  return (
    <>
      <CardHeadline level={1}>{headlineText}</CardHeadline>
      <CardVerticalLineStyle>{children}</CardVerticalLineStyle>
    </>
  );
};

export default PageLayout;
