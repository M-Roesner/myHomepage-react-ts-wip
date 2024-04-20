import React from "react";
import { StyledSkill } from "./styledSkill";

type SkillProp = {
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * Renders a clickable skill item.
 *
 * @param {Object} props - The props object containing onClick function and children.
 * @param {Function} props.onClick - The function to be called when the skill item is clicked.
 * @param {ReactNode} props.children - The content of the skill item.
 */
const Skill = ({ onClick, children }: SkillProp) => {
  return <StyledSkill onClick={onClick}>{children}</StyledSkill>;
};

export default Skill;
