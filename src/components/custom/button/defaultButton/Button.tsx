import React from "react";
import { StyledButton } from "./styledButton";

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
const Button = ({ onClick, children }: SkillProp) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
