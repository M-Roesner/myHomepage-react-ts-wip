// Components
import { CornerCircle, StyledRoundedOffsetButton } from "./styledRoundedOffsetButton";

// Types
import { RoundedOffsetButtonProps } from "../roundedButtonType";

/**
 * Button component with rounded corners and offset circle elements.
 *
 * @param {RoundedOffsetButtonProps} props - Props for the RoundedOffsetButton component.
 * @param {string} props.to - The target URL for navigation when the button is clicked.
 * @param {PrositionType} props.position - The position of the offset circles relative to the button.
 * @param {() => void} [props.onClick] - Optional handler function for click event.
 * @param {React.ReactNode} props.children - Content to be displayed inside the button.
 * @returns {JSX.Element} RoundedOffsetButton component.
 */
const RoundedOffsetButton = ({ to, position, onClick, children }: RoundedOffsetButtonProps): JSX.Element => {
  return (
    <StyledRoundedOffsetButton to={to} onClick={onClick} $position={position}>
      {/* Left offset circle */}
      <CornerCircle $isAlignedStart $position={position} />
      {children}
      {/* Right offset circle */}
      <CornerCircle $position={position} />
    </StyledRoundedOffsetButton>
  );
};

export default RoundedOffsetButton;
