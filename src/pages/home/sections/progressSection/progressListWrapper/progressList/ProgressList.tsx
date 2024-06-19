// Components
import { StyledProgressList } from "./styledFeatureList";
import ProgressListItem from "../progressListItem/ProgressListItem";

// Types & Interfaces
import { IProgress } from "../../types/progressTypes";
import CustomListLayout from "../../../../../../components/custom/layout/customListLayout/CustomListLayout";

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
  const renderProgressItem = (item: IProgress, index: number) => (
    <ProgressListItem key={index} status={item.status} text={item.name} />
  );
  return (
    <StyledProgressList>
      <CustomListLayout
        list={list}
        numerusText={{ singular: "weiteres anzeigen", plural: "weitere anzeigen" }}
        renderItem={renderProgressItem}
      />
    </StyledProgressList>
  );
};

export default ProgressList;
