// Icons
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

// Component
import { StyledToggleButton } from "./styledToggleButton";

/**
 * A toggle button component that displays different icons based on the `isOpen` prop.
 *
 * @component
 * @example
 * // Example usage:
 * // <ToggleButton isOpen={true} />
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the toggle button is in the open state.
 * @returns {JSX.Element} The rendered toggle button component.
 */
const ToggleButton = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
  return <StyledToggleButton $isOpen={isOpen}>{isOpen ? <FaForward /> : <FaBackward />}</StyledToggleButton>;
};

export default ToggleButton;
