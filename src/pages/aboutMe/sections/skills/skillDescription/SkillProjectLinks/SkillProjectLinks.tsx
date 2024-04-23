// components
import { StyledSkillProjectItem, StyledSkillProjectList } from "./styledSkillProjectLinks";
import LinkButton from "../../../../../../components/custom/button/linkButton/LinkButton";

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
          <LinkButton to={link.route}>{link.text}</LinkButton>
        </StyledSkillProjectItem>
      ))}
    </StyledSkillProjectList>
  );
};

export default SkillProjectLinks;
