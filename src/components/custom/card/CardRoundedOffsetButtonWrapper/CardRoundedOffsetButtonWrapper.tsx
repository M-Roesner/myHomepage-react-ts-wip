import { useState, useEffect } from "react";

// Components
import RoundedOffsetButton from "./roundedOffsetButton/RoundedOffsetButton";
import { StyledCardRoundedOffsetButtonWrapper } from "./styledCardRoundedOffsetButtonWrapper";

// Types
import { CardRoundedOffsetButtonWrapperProps, PrositionType } from "./roundedButtonType";

// Helpers
import useScreenSize from "../../../../utils/hooks/screenSize/useScreenSize";

/**
 * Component that wraps a list of RoundedOffsetButton components and adjusts their position based on screen size.
 *
 * @param {CardRoundedOffsetButtonWrapperProps} props - Props for the CardRoundedOffsetButtonWrapper component.
 * @param {RoundedButtonListType[]} props.buttonList - List of buttons to display, each with a target URL and text.
 * @returns {JSX.Element} CardRoundedOffsetButtonWrapper component.
 */
const CardRoundedOffsetButtonWrapper = ({ buttonList }: CardRoundedOffsetButtonWrapperProps): JSX.Element => {
  const [position, setPosition] = useState<PrositionType>("bottom");
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 500) {
      setPosition("right");
      setIsMobile(true);
    } else {
      setPosition("bottom");
      setIsMobile(false);
    }
  }, [screenSize.width]);

  return (
    <StyledCardRoundedOffsetButtonWrapper $isMobile={isMobile}>
      {buttonList.map(
        (button, index) =>
          button && (
            <RoundedOffsetButton key={index} to={button.to} position={position}>
              {button.text}
            </RoundedOffsetButton>
          )
      )}
    </StyledCardRoundedOffsetButtonWrapper>
  );
};

export default CardRoundedOffsetButtonWrapper;
