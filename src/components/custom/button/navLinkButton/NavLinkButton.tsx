import React from "react";

// Components
import { StyledNavLinkButton } from "./styledNavLinkButton";

// Helpers
import { isExternalLink } from "../../../../utils/checkLinkAddress";

// Types
import { ERouteType } from "../../../../routes/router";

export type LinkButtonRouteType = {
  route: ERouteType;
  params?: string[];
  tagId?: string;
};

type StyledLinkButtonProps = {
  to: string | LinkButtonRouteType;
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
const NavLinkButton = ({ to, children }: StyledLinkButtonProps) => {
  let url = "";
  if (typeof to === "string") url = to;

  // TODO: Handling with a given route and the given parameters.
  if (typeof to === "object") {
    const { route, params, tagId } = to;
    const extractedParams = params && params.length > 0 ? `/${params.join("/")}` : "";
    const extractedTagId = tagId !== undefined ? `#${tagId}` : "";
    url = `/${route}${extractedParams}${extractedTagId}`;
    // console.log("url", url);
  }
  // console.log("log url", typeof url, `url="${url}"`);

  if (isExternalLink(url))
    return (
      <StyledNavLinkButton to={url} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledNavLinkButton>
    );

  return <StyledNavLinkButton to={url}>{children}</StyledNavLinkButton>;
};

export default NavLinkButton;
