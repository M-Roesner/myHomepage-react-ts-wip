// Components
import { StyledCloseTimerBar, StyledCloseTimerBarContainer } from "./styledCloseTimerBar";

// Hooks
import { useRuntimer } from "./hooks/useCloseTimer";

// Types
export type CloseTimerBarProps = {
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
const CloseTimerBar = ({ duration, isOpen, onTimeout }: CloseTimerBarProps): JSX.Element => {
  const isRunning = useRuntimer({ duration, isOpen, onTimeout });

  return (
    <StyledCloseTimerBarContainer>
      {isOpen && isRunning ? <StyledCloseTimerBar $animationDuration={duration} /> : null}
    </StyledCloseTimerBarContainer>
  );
};

export default CloseTimerBar;
