import { ListItemType } from "../listLayoutTypes";
import { ListLayoutItemImage } from "../styledListLayout";

/**
 * Renders the conten of a list item.
 *
 * It contains the text and the optional icon of the element.
 *
 * Hint: Uses only the text and the icon src from the ListItemType.
 */
const ListItem_Content = ({ content }: { content: ListItemType }) => {
  return (
    <>
      {content.text ? content.text : ""}
      {content.iconSrc ? <ListLayoutItemImage src={content.iconSrc} /> : ""}
    </>
  );
};

export default ListItem_Content;
