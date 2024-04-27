// components
import { StyledSkillProjectItem, StyledSkillProjectList } from "./styledSkillProjectLinks";
import { StyledLinkButton } from "../../../../../../components/custom/button/linkButton/styledLinkButton";

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
    <StyledSkillProjectList>
      {links.map((link, index) => (
        <StyledSkillProjectItem key={index}>
          <StyledLinkButton to={link.route}>{link.text}</StyledLinkButton>
        </StyledSkillProjectItem>
      ))}
    </StyledSkillProjectList>
  );
};

export default SkillProjectLinks;
