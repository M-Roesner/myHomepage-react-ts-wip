import { LinkType } from "../../skillTypes";
import { StyledSkillProjectItem, StyledSkillProjectList } from "./styledSkillProjectLinks";
import LinkButton from "../../../../../../components/custom/button/linkButton/LinkButton";

const sampleLinks: LinkType[] = [
  { text: "Projekt 1", route: "/project1" },
  { text: "Projekt 2", route: "/project2" },
  { text: "Projekt 3", route: "/project3" },
  { text: "Projekt 4", route: "/project4" },
  { text: "Projekt 5", route: "/project5" },
];

const SkillProjectLinks = () => {
  return (
    <StyledSkillProjectList>
      {sampleLinks.map((link, index) => (
        <StyledSkillProjectItem style={{ textDecoration: "none" }}>
          <LinkButton key={index} to={link.route}>
            {link.text}
          </LinkButton>
        </StyledSkillProjectItem>
      ))}
    </StyledSkillProjectList>
  );
};

export default SkillProjectLinks;
