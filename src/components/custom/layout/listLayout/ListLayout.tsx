// Components
import { StyledListLayout } from "./styledListLayout";

// Types
import { ListItemType, ListLayoutProps } from "./listLayoutTypes";
import ListItem from "./listItem/ListItem";
import CustomListLayout from "../customListLayout/CustomListLayout";

/**
 * Renders a list component with the provided list items props.
 *
 * Middleware helpers:
 * To transform a string array into ListItemType objects, you can use the helper function
 * `stringArrayToListItems` provided in helper.ts.
 *
 * @param {ListLayoutProps} props - The props containing the list items.
 * @param {ListItemType[]} props.list - An array of ListItemType objects.
 * @param {string} props.numerusText - The text to be displayed when there are more items present than currently shown in the list.
 * @param {number} props.maxVisableItems (Optional - default = 5) - Number of elements to be displayed in the first rendering. If more, a button will be displayed.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 */
const ListLayout = ({ list, numerusText, maxVisibleItems = 5 }: ListLayoutProps): JSX.Element => {
  const renderCustomItem = (item: ListItemType, index: number) => <ListItem key={index} item={item} />;

  return (
    <StyledListLayout>
      <CustomListLayout
        list={list}
        renderItem={renderCustomItem}
        numerusText={numerusText}
        maxVisibleItems={maxVisibleItems}
      />
    </StyledListLayout>
  );
};

export default ListLayout;
