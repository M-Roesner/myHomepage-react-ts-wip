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
  return <StyledCloseButton onClick={onClick}>&times;</StyledCloseButton>;
};

export default CloseButton;
