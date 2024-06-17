import { CircleBackground, CircleContainer, CircleProgress, Percentage, SVG } from "./styledSkillCircle";

const SkillCircle = ({ percentage }: { percentage: number }) => {
  return (
    <CircleContainer>
      <SVG width="100" height="100">
        <CircleBackground cx="50" cy="50" r="40" />
        <CircleProgress cx="50" cy="50" r="40" $percentage={percentage} />
      </SVG>
      <Percentage>{percentage}%</Percentage>
    </CircleContainer>
  );
};

export default SkillCircle;
