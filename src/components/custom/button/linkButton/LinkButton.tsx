import React from "react";

// Components
import { StyledLinkButton } from "./styledLinkButton";

// Helpers
import { isExternalLink } from "../../../../utils/checkLinkAddress";

type StyledLinkButtonProps = {
  to: string;
  children: React.ReactNode;
};

/**
 * Functional component for routing a styled navigation link.
 *
 * Checks the link address for external links automatically.
 * - If the link address begins with "http://" or "https://", it is considered an external link.
 *
 * @param {StyledLinkButtonProps} props - The props object contains the to, target, and children.
 * @param {string} props.to - The path to navigate when the link is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed inside the link button.
 */
const LinkButton = ({ to, children }: StyledLinkButtonProps) => {
  if (isExternalLink(to))
    return (
      <StyledLinkButton to={to} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledLinkButton>
    );

  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
};

export default LinkButton;
