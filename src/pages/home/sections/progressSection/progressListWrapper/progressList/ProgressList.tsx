// Components
import { StyledProgressList } from "./styledFeatureList";
import ProgressListItem from "../progressListItem/ProgressListItem";

// Types & Interfaces
import { IProgress } from "../../types/progressTypes";

type ListItemProps = {
  list: IProgress[];
};

/**
 * Displays a list of progress items.
 *
 * @param {IProgress[]} list The array of progress items to display.
 * @returns The rendered progress list component.
 */
const ProgressList = ({ list }: ListItemProps) => {
  return (
    <StyledProgressList>
      {list.map((item, index) => (
        <ProgressListItem key={index} status={item.status} text={item.name} />
      ))}
      {/* TODO: Add maximum visible elements as in the ListLayout component! */}
    </StyledProgressList>
  );
};

export default ProgressList;
