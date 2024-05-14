import { StyledFullscreenSliderButton } from "./styledFullscreenSliderButton";

/**
 * Displays a specific button used in full screen mode, with the option to invert its design and make it non-clickable.
 *
 * By default, the design of the buttons is always intended for the right side of the screen.
 *
 * @param {ImageFullscreenProps} props
 * @param {boolean} props.isInverted - Inverts the design of the button.
 * @param {boolean} props.isEnd - Makes the button non-clickable.
 * @param {void} props.onClick
 * @returns
 */
const FullscreenSliderButton = ({
  isInverted = false,
  isEnd = false,
  onClick,
}: {
  isInverted?: boolean;
  isEnd?: boolean;
  onClick: () => void;
}) => {
  return (
    <StyledFullscreenSliderButton $isInverted={isInverted} $isEnd={isEnd} disabled={isEnd} onClick={onClick}>
      <span></span>
      <span></span>
      {/* TODO: Add an animation for a better look at the last element. Not a high priority! */}
      {isEnd && <span></span>}
    </StyledFullscreenSliderButton>
  );
};

export default FullscreenSliderButton;
