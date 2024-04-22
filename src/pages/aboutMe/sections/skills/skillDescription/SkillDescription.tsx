// components
import { StyledSkillDescription } from "./styledSkillDescription";
import SkilledDescriptionText from "./skillDescriptionText/SkillDescriptionText";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";
import SkillDesciptionHeader from "./skillDescriptionHeader/SkillDesciptionHeader";

// Types
import { LinkType, SkillType } from "../skillTypes";

export type imgFontAwesomeType = {
  className: string;
  style: React.CSSProperties;
};

const sampleLinks: LinkType[] = [
  { text: "Projekt 1", route: "/project1" },
  { text: "Projekt 2", route: "/project2" },
  { text: "Projekt 3", route: "/project3" },
  { text: "Projekt 4", route: "/project4" },
  { text: "Projekt 5", route: "/project5" },
];

type SkillDescriptionProps = {
  skill: SkillType | null;
};

/**
 * Returns a styled description text with the passed skill.
 *
 * @param {SkillType} skill - The skill object contains the description text, among other things.
 */
const SkillDescription = ({ skill }: SkillDescriptionProps) => {
  return (
    <StyledSkillDescription>
      {skill ? (
        <>
          <SkillDesciptionHeader name={skill.name} />
          <SkilledDescriptionText text={skill.description} />
          <SkillProjectLinks links={sampleLinks} />
        </>
      ) : (
        "Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!"
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;
