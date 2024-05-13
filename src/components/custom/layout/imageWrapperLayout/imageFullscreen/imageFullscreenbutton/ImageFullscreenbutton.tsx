import { StyledImageFullscreenButton } from "./styledImageFullscreenbutton";

/**
 * Displays a specific button used in full screen mode, with the option to invert its design and make it non-clickable.
 *
 * @param {ImageFullscreenProps} props
 * @param {boolean} props.isInverted - Inverts the design of the button.
 * @param {boolean} props.isEnd - Makes the button non-clickable.
 * @param {void} props.onClick
 * @returns
 */
const ImageFullscreenbutton = ({
  isInverted = false,
  isEnd = false,
  onClick,
}: {
  isInverted?: boolean;
  isEnd?: boolean;
  onClick: () => void;
}) => {
  return (
    <StyledImageFullscreenButton $isInverted={isInverted} $isEnd={isEnd} disabled={isEnd} onClick={onClick}>
      <span></span>
      <span></span>
      {/* TODO: Add an animation for a better look at the last element. Not a high priority! */}
      {isEnd && <span></span>}
    </StyledImageFullscreenButton>
  );
};

export default ImageFullscreenbutton;
