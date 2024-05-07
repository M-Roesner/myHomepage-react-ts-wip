import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import CardHeadline from "../../card/cardHeadline/CardHeadline";
import { CardVerticalLineStyle } from "../../card/cardVerticalLine/styledCardVerticalLineStyle";
import { StyledNormalButton } from "../../button/styledButtonDefault";

type PageLayoutProps = {
  headlineText: React.ReactNode;
  useBackButton?: boolean;
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
const PageLayout = ({ headlineText, useBackButton = true, children }: PageLayoutProps): JSX.Element => {
  const navigate = useNavigate();

  // TODO: Backbutton test. Maybe it should be in the header instead.
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <CardHeadline level={1}>{headlineText}</CardHeadline>
        {useBackButton && (
          <StyledNormalButton style={{ height: "max-content", transform: "scaleX(-1)" }} onClick={() => navigate(-1)}>
            &#10149;
          </StyledNormalButton>
        )}
      </div>
      <CardVerticalLineStyle>{children}</CardVerticalLineStyle>
    </div>
  );
};

export default PageLayout;
