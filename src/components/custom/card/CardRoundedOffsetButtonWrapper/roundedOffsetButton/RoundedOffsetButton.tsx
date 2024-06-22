// Components
import { CornerCircle, StyledRoundedOffsetButton } from "./styledRoundedOffsetButton";

// Types
import { OffsetButton_PositionType } from "../roundedButtonType";

type RoundedOffsetButtonProps = {
  to: string;
  offsetPosition: OffsetButton_PositionType;
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * Button component with rounded corners and offset circle elements.
 *
 * @param {RoundedOffsetButtonProps} props - Props for the RoundedOffsetButton component.
 * @param {string} props.to - The target URL for navigation when the button is clicked.
 * @param {OffsetPositionType} props.offsetPosition - The offset position of the circles relative to the button (e.g., "start", "end", "top", "bottom").
 * @param {() => void} [props.onClick] - Optional handler function for click event.
 * @param {React.ReactNode} props.children - Content to be displayed inside the button.
 * @returns {JSX.Element} RoundedOffsetButton component.
 */
const RoundedOffsetButton = ({ to, offsetPosition, onClick, children }: RoundedOffsetButtonProps): JSX.Element => {
  return (
    <StyledRoundedOffsetButton to={to} onClick={onClick} $offsetPosition={offsetPosition}>
      {/* Left offset circle */}
      <CornerCircle className="outerCircle" $isAlignedStart $offsetPosition={offsetPosition} />
      {children}
      {/* Right offset circle */}
      <CornerCircle $offsetPosition={offsetPosition} />
    </StyledRoundedOffsetButton>
  );
};

export default RoundedOffsetButton;
