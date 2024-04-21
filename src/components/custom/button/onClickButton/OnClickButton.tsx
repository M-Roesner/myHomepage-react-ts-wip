import React from "react";
import { StyledOnClickButton } from "./styledOnClickButton";

type OnClickButtonProp = {
  onClick: () => void;
  children: React.ReactNode;
};

/**
 * Button component for triggering an onClick event.
 *
 * @param {Object} props - The props object containing the onClick function and children.
 * @returns {JSX.Element} - The rendered button component.
 */
const OnClickButton = ({ onClick, children }: OnClickButtonProp) => {
  return <StyledOnClickButton onClick={onClick}>{children}</StyledOnClickButton>;
};

export default OnClickButton;
