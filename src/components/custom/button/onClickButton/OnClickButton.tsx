import React from "react";
import { StyledOnClickButton } from "./styledOnClickButton";

type OnClickButtonProp = {
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
const OnClickButton = ({ onClick, children }: OnClickButtonProp) => {
  return <StyledOnClickButton onClick={onClick}>{children}</StyledOnClickButton>;
};

export default OnClickButton;
