// components
import { StyledSkillListWrapper } from "./styledSkillListWrapper";
import SkillList from "./skillList/SkillList";
import { StyledCardFootnote } from "../../../../../components/custom/card/cardFootnote/StyledCardFootnote";

// Resources, helpers and types
import { ELanguage, formatDate } from "../../../../../utils/dateHelper";

// Hooks
import useSortedSkills from "./hooks/useSortedSkills";
import useLastUpdateDate from "../hooks/useLastUpdateDate";

/**
 * Component for displaying a list of skills grouped by categories.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click events on skills.
 */
export const SkillListWrapper = () => {
  // TODO: SkillList data receiving: This structure for receiving data will be changed with the database in future.

  // Alternative with useMemo:
  // const frontendSkills = useSortedSkills("Frontend");
  // const backendSkills = useSortedSkills("Backend");
  // const designSkills = useSortedSkills("Design");
  // const otherSkills = useSortedSkills("Backend");

  // const sortedSkills = useMemo(() => {
  //   return [
  //     { title: "Frontend", skills: frontendSkills },
  //     { title: "Backend", skills: backendSkills },
  //     { title: "Design", skills: designSkills },
  //     { title: "Sonstiges", skills: otherSkills },
  //   ];
  // }, [frontendSkills, backendSkills, designSkills, otherSkills]);

  // Alternative without useMemo:
  const sortedSkills = [
    { title: "Frontend", skills: useSortedSkills("Frontend") },
    { title: "Backend", skills: useSortedSkills("Backend") },
    { title: "Design", skills: useSortedSkills("Design") },
    { title: "Sonstiges", skills: useSortedSkills("Other") },
  ];

  const lastDate = useLastUpdateDate();
  const formattedLastDate = formatDate(lastDate, ELanguage.GERMAN);

  return (
    <StyledSkillListWrapper>
      {sortedSkills.map(
        ({ title, skills }) => skills.length > 0 && <SkillList key={title} skillList={skills} title={title} />
      )}
      <StyledCardFootnote>{`letztes update am: ${formattedLastDate}`}</StyledCardFootnote>
    </StyledSkillListWrapper>
  );
};

export default SkillListWrapper;
