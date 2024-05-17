import { useEffect } from "react";
import { StyledCloseButton } from "./styledCloseButton";

type CloseButtonProps = { onClick: () => void };

/**
 * A custom button component for closing an element.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered close button.
 */
const CloseButton = ({ onClick }: CloseButtonProps): JSX.Element => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClick();
    };

    // Add event listener on mount.
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on unmount to prevent memory leaks.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  return (
    <StyledCloseButton onClick={() => onClick()} title="schließen oder ESC">
      &times;
    </StyledCloseButton>
  );
};

export default CloseButton;
