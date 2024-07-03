// Components
import { StyledCloseCountdownBar, StyledCloseCountdownBarContainer } from "./styledCloseCountdownBar";

// Hooks
import { useCloseTimer } from "../hooks/useCloseTimer";

// Types
type CloseCountdownBarProps = {
  duration: number;
  isOpen: boolean;
  onTimeout: () => void;
};

/**
 * CloseTimerBar component that displays a visual timer bar indicating
 * the remaining time before the menu closes automatically.
 *
 * @param {number} props.duration - Duration in milliseconds for the timer.
 * @param {boolean} props.isOpen - Boolean flag indicating if the timer should run (i.e., the menu is open).
 * @param {() => void} props.onTimeout - Callback function to be called when the timer completes.
 * @returns {JSX.Element} The CloseTimerBar component.
 *
 * @example
 * <CloseTimerBar duration={5000} isOpen={true} onTimeout={() => {}} />
 */
const CloseCountdownBar = ({ duration, isOpen, onTimeout }: CloseCountdownBarProps): JSX.Element => {
  const isRunning = useCloseTimer({ duration, isOpen, onTimeout });

  return (
    <StyledCloseCountdownBarContainer>
      {isOpen && isRunning ? <StyledCloseCountdownBar $animationDuration={duration} /> : null}
    </StyledCloseCountdownBarContainer>
  );
};

export default CloseCountdownBar;
