// components
import { StyledSkillProjectItem, StyledSkillProjectList } from "./styledSkillProjectLinks";
import { StyledNavLinkButton } from "../../../../../../components/custom/button/navLinkButton/styledNavLinkButton";

// Types
import { LinkType } from "../../skillTypes";
import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";

type SkillProjectListProps = {
  links: LinkType[];
};

/**
 * Returns a styled component with a list of links.
 *
 * @param {LinkType[]} links - Each link contains the text and the route.
 */
const SkillProjectLinks = ({ links }: SkillProjectListProps) => {
  return (
    <>
      <CardHeadline level={4}>Projekt links:</CardHeadline>
      <StyledSkillProjectList>
        {links.map((link, index) => (
          <StyledSkillProjectItem key={index}>
            <StyledNavLinkButton to={link.route}>{link.text}</StyledNavLinkButton>
          </StyledSkillProjectItem>
        ))}
      </StyledSkillProjectList>
    </>
  );
};

export default SkillProjectLinks;
