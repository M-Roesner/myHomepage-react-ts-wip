// Components
import { StyledListLayoutItemForButton } from "../styledListLayout";
import NavLinkButton from "../../../button/navLinkButton/NavLinkButton";
import ListItem_Content from "./ListItem_Content";

// Types
import { ListItemType } from "../listLayoutTypes";
import { ERouteType } from "../../../../../routes/router";

/**
 * Renders a spezial list item with a clickable button and contains the text and the optional icon of the element.
 *
 * @param {number} props.index - The index of the list item.
 * @param {ListItemType} props.item - The list item to render.
 * @returns {JSX.Element} - Returns the JSX for the rendered list item.
 */
const ListItem_Button = ({ item }: { item: ListItemType }): JSX.Element => {
  const url =
    typeof item.buttonUrl === "string"
      ? item.buttonUrl
      : item.buttonUrl?.route && Object.values(ERouteType).includes(item.buttonUrl.route)
      ? `/${item.buttonUrl.route}/`
      : "";
  return (
    <StyledListLayoutItemForButton>
      <NavLinkButton to={url}>
        <ListItem_Content content={item} />
      </NavLinkButton>
    </StyledListLayoutItemForButton>
  );
};

export default ListItem_Button;
