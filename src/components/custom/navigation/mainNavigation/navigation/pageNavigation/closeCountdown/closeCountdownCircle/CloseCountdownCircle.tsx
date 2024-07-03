// Components
import { StyledCloseCountdownCircleContainer, StyledCloseCountdownCircle } from "./styledCloseCountdownCircle";

// Hooks
import { useCloseTimer } from "../hooks/useCloseTimer";

type CloseCountdownCircleProps = { isOpen: boolean; duration: number; onTimeout: () => void };

const CloseCountdownCircle = ({ duration, isOpen, onTimeout }: CloseCountdownCircleProps) => {
  const isRunning = useCloseTimer({ duration, isOpen, onTimeout });

  const radius = 64 / 2;
  const circumference = 2 * Math.PI * radius; // Kreisumfang

  if (!isOpen && !isRunning) return;

  return (
    <StyledCloseCountdownCircleContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <StyledCloseCountdownCircle cx="50%" cy="50%" r={radius} duration={duration} circumference={circumference} />
    </StyledCloseCountdownCircleContainer>
  );
};

export default CloseCountdownCircle;
