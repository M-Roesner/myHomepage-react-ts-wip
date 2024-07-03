// Components
import { StyledBurgerMenuWrapper } from "./styledBurgerMenu";
import CloseCountdownCircle from "../closeCountdown/closeCountdownCircle/CloseCountdownCircle";
import BurgerMenu from "./BurgerMenu";

type BurgerMenuWrapperProps = {
  isOpen: boolean;
  isHover: boolean;
  autoCloseDuration: number;
  onClick: () => void;
  onTimeout: () => void;
};

/**
 * A functional component that renders a burger menu icon with GSAP animation.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - The state of the burger menu (open or closed).
 * @param {Function} props.onClick - The function to toggle the burger menu state.
 */
const BurgerMenuWrapper = ({ isOpen, isHover, autoCloseDuration, onClick, onTimeout }: BurgerMenuWrapperProps) => {
  return (
    <StyledBurgerMenuWrapper>
      <CloseCountdownCircle isOpen={isOpen && !isHover} duration={autoCloseDuration} onTimeout={onTimeout} />
      <BurgerMenu isOpen={isOpen} onClick={onClick} />
    </StyledBurgerMenuWrapper>
  );
};

export default BurgerMenuWrapper;
