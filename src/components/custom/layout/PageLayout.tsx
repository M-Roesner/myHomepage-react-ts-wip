import React from "react";

// Components
import { StyledPageLayout } from "./StyledPageLayout";
import CardHeadline from "../card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../card/cardVerticalLine/styledCardVerticalLineStyle";

type PageLayoutProps = { headlineText: React.ReactNode; children: React.ReactNode };

const PageLayout = ({ headlineText, children }: PageLayoutProps) => {
  return (
    <StyledPageLayout>
      <CardHeadline level={1}>{headlineText}</CardHeadline>
      <CardVerticalLineStyle>{children}</CardVerticalLineStyle>
    </StyledPageLayout>
  );
};

export default PageLayout;
