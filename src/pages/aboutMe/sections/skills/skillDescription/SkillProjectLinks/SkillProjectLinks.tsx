// components
import { StyledSkillProjectItem, StyledSkillProjectList } from "./styledSkillProjectLinks";
import CardHeadline from "../../../../../../components/custom/card/cardHeadline/CardHeadline";
import NavLinkButton from "../../../../../../components/custom/button/navLinkButton/NavLinkButton";

// Types
import { LinkType } from "../../skillTypes";

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
      <CardHeadline level={4}>Links:</CardHeadline>
      <StyledSkillProjectList>
        {links.map((link, index) => (
          <StyledSkillProjectItem key={index}>
            <NavLinkButton to={link.route}>{link.text}</NavLinkButton>
          </StyledSkillProjectItem>
        ))}
      </StyledSkillProjectList>
    </>
  );
};

export default SkillProjectLinks;
