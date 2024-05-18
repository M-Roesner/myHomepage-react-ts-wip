import { StyledCloseButton } from "./styledCloseButton";
import useKeyboardHandler from "../../../../utils/hooks/keyboardHandler/useKeyboardHandler";

type CloseButtonProps = { onClick: () => void };

/**
 * A custom button component for closing an element. This button can also be triggered by pressing the "Escape" key.
 *
 * @param {CloseButtonProps} props - The props object.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered close button.
 */
const CloseButton = ({ onClick }: CloseButtonProps): JSX.Element => {
  useKeyboardHandler({
    Escape: onClick,
  });

  return (
    <StyledCloseButton onClick={() => onClick()} title="schließen oder ESC">
      &times;
    </StyledCloseButton>
  );
};

export default CloseButton;
