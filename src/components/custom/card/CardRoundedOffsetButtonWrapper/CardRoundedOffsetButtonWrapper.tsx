import { useState, useEffect } from "react";

// Components
import RoundedOffsetButton from "./roundedOffsetButton/RoundedOffsetButton";
import { StyledCardRoundedOffsetButtonWrapper } from "./styledCardRoundedOffsetButtonWrapper";

// Types
import {
  OffsetButtonWrapper_DirectionType,
  OffsetButton_PrositionType,
  RoundedButtonListType,
} from "./roundedButtonType";

type CardRoundedOffsetButtonWrapperProps = {
  buttonList: RoundedButtonListType[];
  direction: OffsetButtonWrapper_DirectionType;
};
/**
 * Component that wraps a list of RoundedOffsetButton components and adjusts their position based on screen size.
 *
 * @param {CardRoundedOffsetButtonWrapperProps} props - Props for the CardRoundedOffsetButtonWrapper component.
 * @param {RoundedButtonListType[]} props.buttonList - List of buttons to display, each with a target URL and text.
 * @returns {JSX.Element} CardRoundedOffsetButtonWrapper component.
 */
const CardRoundedOffsetButtonWrapper = ({
  buttonList,
  direction,
}: CardRoundedOffsetButtonWrapperProps): JSX.Element => {
  const [position, setPosition] = useState<OffsetButton_PrositionType>("bottom");

  useEffect(() => {
    if (direction === "column") setPosition("right");
    else setPosition("bottom");
  }, [direction]);

  return (
    <StyledCardRoundedOffsetButtonWrapper $direction={direction}>
      {buttonList.map(
        (button, index) =>
          button && (
            <RoundedOffsetButton key={index} to={button.to} offsetPosition={position}>
              {button.text}
            </RoundedOffsetButton>
          )
      )}
    </StyledCardRoundedOffsetButtonWrapper>
  );
};

export default CardRoundedOffsetButtonWrapper;
