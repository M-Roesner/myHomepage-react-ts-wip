import { ListItemType } from "../listLayoutTypes";
import { ListLayoutItemImage } from "../styledListLayout";

/**
 * Renders the conten of a list item.
 *
 * It contains the text and the optional icon of the element.
 *
 * If the item's URL is specified as a string or matches a route defined in the ERouteType enum,
 */
const ListItem_Content = ({ item }: { item: ListItemType }) => {
  return (
    <>
      {item.text ? item.text : ""}
      {item.iconSrc ? <ListLayoutItemImage src={item.iconSrc} /> : ""}
    </>
  );
};

export default ListItem_Content;
