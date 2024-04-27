// Styled-Component
import { iconButtonWrapper as StyledIconButton } from "./styledIconButton";

// fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { RotateProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

// Helper function
import { isValidColor } from "../../../../utils/colorValidators";

type IconButtonProps = {
  url: string;
  icon: IconDefinition;
  rotation?: RotateProp;
  size?: SizeProp;
  color?: string;
};

/**
 * Functional component for rendering an icon and link with optional rotation, color, and size.
 *
 * Icons come from https://fontawesome.com/
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 *   @param {string} props.url - The URL the link should navigate to.
 *   @param {IconDefinition} props.icon - The icon to render.
 *   @param {RotateProp} [props.rotation] - Optional rotation for the icon (90, 180, or 270).
 *   @param {string} [props.color] - Optional color for the icon.
 *   @param {SizeProp} [props.size] - Optional size for the icon (e.g., "lg", "2x", "3x", "4x", "5x", "10x").
 */
const IconButton = ({ url, icon, rotation, color, size }: IconButtonProps) => {
  return (
    <StyledIconButton to={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        rotation={rotation}
        size={size}
        style={color != undefined && isValidColor(color) ? { color: color } : undefined}
      />
    </StyledIconButton>
  );
};

export default IconButton;
