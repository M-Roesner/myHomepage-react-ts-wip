// Components
import { StyledListLayoutItem } from "../styledListLayout";
import ListItem_Content from "./ListItem_Content";

// Types
import { ListItemType } from "../listLayoutTypes";

/**
 * Renders a normal list item and contains the text and the optional icon of the element.
 *
 * Hint: The buttonUrl from the ListItemType is not used here.
 *
 * @param {number} props.index - The index of the list item.
 * @param {ListItemType} props.item - The list item to render.
 * @returns {JSX.Element} - Returns the JSX for the rendered list item.
 */
const ListItem_Normal = ({ item }: { item: ListItemType }): JSX.Element => {
  return (
    <StyledListLayoutItem>
      <ListItem_Content content={item} />
    </StyledListLayoutItem>
  );
};

export default ListItem_Normal;
