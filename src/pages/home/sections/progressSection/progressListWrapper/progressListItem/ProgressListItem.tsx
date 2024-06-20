// Components
import { StyledProgressListItem } from "./styledProgressListItem";
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa"; // Icon für in-progress hinzufügen

// Types
import { ProgressStatus } from "../../types/progressTypes";

type ProgressListItemProps = {
  status: ProgressStatus;
  text: string;
};

/**
 * Displays a list item with an icon indicating completion status.
 *
 * @param {string} status The status of the item: "complete", "in-progress", or "not-started".
 * @param {string} text The text content of the list item.
 * @returns The rendered list item component.
 */
const ProgressListItem = ({ status, text }: ProgressListItemProps) => {
  let icon: JSX.Element;
  if (status === "completed") {
    icon = <FaCheckCircle color="#4e8a47" />;
  } else if (status === "in-progress") {
    icon = <FaHourglassHalf color="#cfce79" />;
  } else {
    icon = <FaTimesCircle color="#dd3e3e" />;
  }

  return (
    <StyledProgressListItem>
      <span>{icon}</span>
      {text}
    </StyledProgressListItem>
  );
};

export default ProgressListItem;
