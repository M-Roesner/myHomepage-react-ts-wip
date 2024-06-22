import { useState, useEffect } from "react";

// Components
import RoundedOffsetButton from "./roundedOffsetButton/RoundedOffsetButton";
import { StyledCardRoundedOffsetButtonWrapper } from "./styledCardRoundedOffsetButtonWrapper";

// Types
import {
  OffsetButtonWrapper_DirectionType,
  OffsetButton_PositionType,
  RoundedButtonListType,
} from "./roundedButtonType";
import { RuleSet } from "styled-components";

type CardRoundedOffsetButtonWrapperProps = {
  buttonList: RoundedButtonListType[];
  direction: OffsetButtonWrapper_DirectionType;
  $extraStyleRuleSet_direction?: RuleSet<{
    $direction: OffsetButtonWrapper_DirectionType;
  }>;
};

/**
 * Component that wraps a list of RoundedOffsetButton components and adjusts their position based on screen size.
 *
 * @param {CardRoundedOffsetButtonWrapperProps} props - Props for the CardRoundedOffsetButtonWrapper component.
 * @param {RoundedButtonListType[]} props.buttonList - List of buttons to display, each with a target URL and text.
 * @param {OffsetButtonWrapper_DirectionType} props.direction - Direction in which the buttons are aligned (row or column).
 * @param {RuleSet<{ $direction: OffsetButtonWrapper_DirectionType }>} [props.$extraStyleRuleSet_direction] - Additional styled-components' RuleSet to be applied based on the direction.
 * @returns {JSX.Element} CardRoundedOffsetButtonWrapper component.
 */
const CardRoundedOffsetButtonWrapper = ({
  buttonList,
  direction,
  $extraStyleRuleSet_direction,
}: CardRoundedOffsetButtonWrapperProps): JSX.Element => {
  const [position, setPosition] = useState<OffsetButton_PositionType>("bottom");

  useEffect(() => {
    if (direction === "column") setPosition("right");
    else setPosition("bottom");
  }, [direction]);

  return (
    <StyledCardRoundedOffsetButtonWrapper $direction={direction} $extraStyleRuleSet={$extraStyleRuleSet_direction}>
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
