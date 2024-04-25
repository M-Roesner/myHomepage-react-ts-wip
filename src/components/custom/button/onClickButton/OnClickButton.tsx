import React, { MouseEvent } from "react";
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
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();

    // TODO: The selected skill should also be displayed in the list where you can click on the button.
    // However, the component must then no longer be included in the folder for custom components,
    // as it is a special component for the “Skills” section on the “About me” page.

    // console.log(e.target);
  };

  return <StyledOnClickButton onClick={clickHandler}>{children}</StyledOnClickButton>;
};

export default OnClickButton;
