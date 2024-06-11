import { useEffect, useRef, useState } from "react";
import { StyledProgressText, StyledProgressBarWrapper, StyledProgressFill } from "./styledProgressBar";

/**
 * ProgressBar component that visually represents progress.
 *
 * @param {number} progressInPercent - The progress in percentage. Must be between 0 and 100.
 * @returns {JSX.Element} The rendered progress bar component.
 */
const ProgressBar = ({ progressInPercent }: { progressInPercent: number }): JSX.Element => {
  // Ensure that the value is between 0 and 100
  const clampedProgress = Math.min(Math.max(progressInPercent, 0), 100);

  // State to track if the progress bar is visible in the viewport
  const [isVisible, setIsVisible] = useState(false);

  // Ref to the progress bar element
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = progressBarRef.current;

    // IntersectionObserver callback to handle visibility changes
    const observer = new IntersectionObserver(
      // (entries) => {
      // entries.forEach((entry) => {
      // Destructure the first (and only) entry in the `entries` array.
      // Since we're observing only one element, this reduces the code to a single entry.
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      // });
      { threshold: 0.5 } // Adjust the threshold as needed (e.g.: 50% of the target element is visible in the viewport).
    );

    if (currentRef) observer.observe(currentRef); // Start observing the progress bar element

    // Cleanup function to unobserve the element when component unmounts
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <StyledProgressBarWrapper ref={progressBarRef}>
      <StyledProgressFill $progressInPercent={clampedProgress} $isVisible={isVisible} />
      <StyledProgressText>{`${clampedProgress}% abgeschlossen`}</StyledProgressText>
    </StyledProgressBarWrapper>
  );
};

export default ProgressBar;

/**
 * Erklärung der IntersectionObserverEntry-Eigenschaften:
 * boundingClientRect: Gibt die Größe des beobachteten Elements an.
 * intersectionRatio: Gibt das Verhältnis der Sichtbarkeit des beobachteten Elements an.
 * intersectionRect: Gibt den sichtbaren Teil des beobachteten Elements an.
 * isIntersecting: Gibt an, ob das Element im Viewport sichtbar ist (true oder false).
 * rootBounds: Gibt die Grenzen des Viewports an.
 * target: Das beobachtete Element.
 * time: Zeitstempel, wann die Sichtbarkeitsänderung aufgetreten ist.
 */
