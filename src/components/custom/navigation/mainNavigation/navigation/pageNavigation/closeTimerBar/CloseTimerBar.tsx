import { useEffect, useState } from "react";
import { StyledCloseTimerBar, StyledCloseTimerBarContainer } from "./styledCloseTimerBar";

type CloseTimerBarProps = {
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
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isOpen) {
      setIsRunning(true);
      timeoutId = setTimeout(() => {
        onTimeout();
        setIsRunning(false);
      }, duration);
    } else {
      setIsRunning(false);
      if (timeoutId) clearTimeout(timeoutId);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, duration, onTimeout]);

  return (
    <StyledCloseTimerBarContainer>
      {isOpen && isRunning ? <StyledCloseTimerBar $animationDuration={duration} /> : null}
    </StyledCloseTimerBarContainer>
  );
};

export default CloseTimerBar;
