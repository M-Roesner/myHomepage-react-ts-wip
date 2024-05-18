// Style
import { StyledSliderSvg } from "./styledSliderSvg";

// Helpers
import useScreenSize from "../../../../../../../utils/hooks/screenSize/useScreenSize";
import useKeyboardHandler from "../../../../../../../utils/hooks/keyboardHandler/useKeyboardHandler";
import useWheelHandler from "../../../../../../../utils/hooks/mouseHandler/useWheelHandler";

type ImageSlider_ButtonProps = {
  isInverted?: boolean;
  isEnd?: boolean;
  onClick: () => void;
};

/**
 * Displays a specific button used in full screen mode, with the option to invert its design and make it non-clickable.
 * This button can also be triggered by pressing the "Escape" key.
 *
 * By default, the design of the buttons is always intended for the right side of the screen.
 *
 * @param {ImageSlider_ButtonProps} props
 * @param {boolean} props.isInverted - Inverts the design of the button.
 * @param {boolean} props.isEnd - Makes the button non-clickable.
 * @param {void} props.onClick
 * @returns
 */
const ImageSlider_Button = ({ isInverted = false, isEnd = false, onClick }: ImageSlider_ButtonProps) => {
  const screenSize = useScreenSize();

  useKeyboardHandler({
    ArrowRight: () => {
      if (!isEnd && !isInverted) onClick();
    },
    ArrowLeft: () => {
      if (!isEnd && isInverted) onClick();
    },
  });

  useWheelHandler({
    WheelRight: () => {
      if (!isEnd && !isInverted) onClick();
    },
    WheelLeft: () => {
      if (!isEnd && isInverted) onClick();
    },
  });

  /**
   * TODO: Animate the button with
   * react-spring: https://www.react-spring.dev/
   * or
   * gsap: https://gsap.com/docs/v3/
   *
   *
   * https://www.webdesign-journal.de/css3-animationen-erstellen/
   */
  return (
    <StyledSliderSvg
      viewBox="0 0 50 60"
      $isInverted={isInverted}
      $isEnd={isEnd}
      $isMobile={screenSize.deviceType === "mobile" || screenSize.deviceType === "tablet"}
      onClick={onClick}
    >
      <line id="lineTop" x1={10} y1={10} x2={40} y2={30} />
      <line id="linebottom" x1={10} y1={50} x2={40} y2={30} />
      <line id="lineEnd" x1={40} y1={10} x2={40} y2={50} />
    </StyledSliderSvg>
  );
};

export default ImageSlider_Button;
