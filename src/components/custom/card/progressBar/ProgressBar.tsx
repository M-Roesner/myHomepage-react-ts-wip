import { StyledProgressText, StyledProgressBarWrapper, StyledProgressFill } from "./styledProgressBar";

type ProgressBarProps = { progressInPercent: number };

/**
 * A progress bar component that visually represents progress.
 *
 * @param {number} progressInPercent The progress in percentage. Must be between 0 and 100.
 * @returns The rendered progress bar component.
 */
const ProgressBar = ({ progressInPercent }: ProgressBarProps) => {
  // Ensure that the value is between 0 and 100
  const clampedProgress = Math.min(Math.max(progressInPercent, 0), 100);

  return (
    <StyledProgressBarWrapper>
      <StyledProgressFill $progressInPercent={clampedProgress} />
      <StyledProgressText>{`${clampedProgress}% abgeschlossen`}</StyledProgressText>
    </StyledProgressBarWrapper>
  );
};

export default ProgressBar;
