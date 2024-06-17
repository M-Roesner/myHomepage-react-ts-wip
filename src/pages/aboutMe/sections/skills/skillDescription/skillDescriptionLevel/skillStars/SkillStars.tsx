import { SkillLevelType } from "../../../skillTypes";
import { StarContainer, Star } from "./styledSkillStars";

/**
 * SkillStars component to display skill levels using a star rating.
 *
 * @param {Object} props - The properties object.
 * @param {SkillLevelType} props.level - The skill level (1 to 5 stars).
 * @returns {JSX.Element} The rendered SkillStars component.
 */
const SkillStars = ({ level }: { level: SkillLevelType }): JSX.Element => {
  const totalStars = 5;

  // Create an array with length of totalStars and fill it with JSX elements
  // for each star. The $filled prop determines whether the star is filled (gold) or empty (gray).
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <Star key={index} $filled={index < level}>
      ★
    </Star>
  ));

  return <StarContainer>{stars}</StarContainer>;
};

export default SkillStars;
