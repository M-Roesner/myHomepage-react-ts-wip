// components
import { StyledSkillDescription } from "./styledSkillDescription";
import SkilledDescriptionText from "./skillDescriptionText/SkillDescriptionText";
import SkillProjectLinks from "./SkillProjectLinks/SkillProjectLinks";
import SkillDesciptionHeader from "./skillDescriptionHeader/SkillDesciptionHeader";

// Types
import { SkillCategoryType, SkillType } from "../skillTypes";
import { useParams } from "react-router-dom";
import { mySampleSkills } from "../../../../../resources/samples/mySampleSkills";

export type imgFontAwesomeType = {
  className: string;
  style: React.CSSProperties;
};

const isNumber = (value: string): boolean => {
  const parsedValue = Number(value);
  return isNaN(parsedValue);
};

const getSingleSkill = (
  skillCategory: SkillCategoryType | undefined,
  skillId: number | string | undefined
): SkillType | undefined => {
  if (skillCategory === undefined || skillId === undefined) return undefined;
  let skillIdNumber = 0;
  if (typeof skillId === "string" && isNumber(skillId)) {
    skillIdNumber = Number(skillId);
  } else {
    skillIdNumber = skillId as number;
  }
  const fixSkillIdNumber = 2;

  const skillList = mySampleSkills[skillCategory];
  console.log(skillList);
  if (!skillList) {
    console.log("skillList log");
    return undefined;
  }

  // Suche nach der Fähigkeit in der Skill-Liste basierend auf der ID
  const skill = skillList.find((skill) => skill.id === skillIdNumber);
  console.log(skill);

  if (!skill) {
    console.log(`skillIdNumber ${skillIdNumber}`);

    console.log(skillList.find((skill) => skill.id === skillIdNumber));
    console.log(skillList.find((skill) => skill.id === fixSkillIdNumber));

    console.log("skill log");
    return undefined;
  }
  return skill;
};

type SkillDescriptionProps = {
  oldskill: SkillType | null;
};
/**
 * Returns a styled description text with the passed skill.
 *
 * @param {SkillType} skill - The skill object contains the description text, among other things.
 */
const SkillDescription = ({ oldskill }: SkillDescriptionProps) => {
  const { skillId, skillCategory } = useParams<{ skillId: string; skillCategory: SkillCategoryType }>();
  // const skill = getSingleSkill(skillCategory, skillId);

  const skill = oldskill;

  return (
    <StyledSkillDescription>
      {skill ? (
        <>
          <SkillDesciptionHeader name={skill.name} />
          <SkilledDescriptionText text={skill.description} />
          {skill.links !== undefined && <SkillProjectLinks links={skill.links} />}
        </>
      ) : (
        "Wählen Sie eine Fähigkeit aus, um die entsprechende Beschreibung zu sehen!"
      )}
    </StyledSkillDescription>
  );
};

export default SkillDescription;
