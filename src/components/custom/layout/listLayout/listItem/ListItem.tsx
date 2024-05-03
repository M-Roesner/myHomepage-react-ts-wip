// Components
import ListItem_Button from "./ListItem_Button";
import ListItem_Normal from "./ListItem_Normal";

// Types
import { ListItemType } from "../listLayoutTypes";
import { ERouteType } from "../../../../../routes/router";

/**
 * Renders a list item based on the specified item and the optional icon of the element.
 *
 * If the 'item' property has a correct button URL and it matches a string
 * or a route defined by the ERouteType enum, it will be rendered as a clickable button.
 * Otherwise, it is a simple list element.
 *
 * Hint: Don't forget to assign a key to this element!
 *
 * @param {ListItemType} props.item - The list item to render.
 * @returns {JSX.Element} - Returns the JSX for the rendered list item.
 */
const ListItem = ({ item }: { item: ListItemType }): JSX.Element => {
  const isButton =
    item.buttonUrl && (typeof item.buttonUrl === "string" || Object.values(ERouteType).includes(item.buttonUrl.route));

  return isButton ? <ListItem_Button item={item} /> : <ListItem_Normal item={item} />;
};

export default ListItem;
