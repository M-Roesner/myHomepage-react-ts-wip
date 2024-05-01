import { useState } from "react";

// Components
import { StyledListLayout, StyledListLayoutItem, StyledListLayoutItemForButton } from "./styledListLayout";
import { StyledNormalButton_OnlyText } from "../../button/styledButtonDefault";

import LinkButton from "../../button/linkButton/LinkButton";
import { ERouteType } from "../../../../routes/router";

// Types
export type UrlType = {
  route: ERouteType;
};
export type ListItemType = {
  text: string;
  icon?: string;
  url?: string | UrlType;
};
export type PersonalButtonTextType = {
  singular: string;
  plural: string;
};
export type ListLayoutProps = {
  list: ListItemType[];
  personalButtonText?: PersonalButtonTextType;
  isLinkButton?: boolean;
};

// render functions
/**
 * Renders a list item with a button if the item has a URL specified.
 *
 * If the item's URL is specified as a string or matches a route defined in the ERouteType enum,
 * a clickable button is rendered with the item's text and optional icon.
 *
 * @param {number} index - The index of the list item.
 * @param {ListItemType} item - The list item to render.
 * @returns {JSX.Element} - Returns the JSX for the rendered list item with a button.
 */
const renderListItemWithButton = (index: number, item: ListItemType): JSX.Element => {
  const url =
    typeof item.url === "string"
      ? item.url
      : item.url?.route && Object.values(ERouteType).includes(item.url.route)
      ? `/${item.url.route}/`
      : "";
  return (
    <StyledListLayoutItemForButton key={index}>
      <LinkButton to={url}>
        {item.text}
        {item.icon ? ` ${item.icon}` : ""}
      </LinkButton>
    </StyledListLayoutItemForButton>
  );
};

/**
 * Renders a list item based on the specified item.
 *
 * If `isLinkButton` is true and the item has a URL specified as a string or matches a route defined in the ERouteType enum,
 * a clickable button is rendered using `renderListItemWithButton`. Otherwise, a simple list item is rendered with the item's text and optional icon.
 *
 * @param {number} index - The index of the list item.
 * @param {ListItemType} item - The list item to render.
 * @param {boolean} isLinkButton - Indicates whether the list item should be rendered as a clickable button.
 * @returns {JSX.Element} - Returns the JSX for the rendered list item.
 */
const renderListItem = (index: number, item: ListItemType, isLinkButton: boolean): JSX.Element => {
  if (isLinkButton && item.url && (typeof item.url === "string" || Object.values(ERouteType).includes(item.url.route)))
    return renderListItemWithButton(index, item);
  return (
    <StyledListLayoutItem key={index}>
      {item.text}
      {item.icon ? ` ${item.icon}` : ""}
    </StyledListLayoutItem>
  );
};

/**
 * Renders a list component with the provided list items props.
 *
 * Middleware helpers:
 * To transform a string array into ListItemType objects, you can use the helper function
 * `stringArrayToListItems` provided in helper.ts.
 *
 * @param {ListLayoutProps} props - The props containing the list items.
 * @param {ListItemType[]} props.list - An array of ListItemType objects.
 * @param {string} props.personalButtonText - The text to be displayed when there are more items present than currently shown in the list.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 */
const ListLayout = ({ list, personalButtonText, isLinkButton = false }: ListLayoutProps): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const maxVisableItems = 5;
  const remainingItems = list.length - maxVisableItems;

  const handleClick = () => setShowAll(true);

  const personalText = personalButtonText
    ? `${remainingItems > 1 ? personalButtonText.plural : personalButtonText.singular}`
    : "";
  const buttonText = `+${remainingItems} weitere ${personalText}`;

  return (
    <StyledListLayout>
      {showAll
        ? list.map((listItem, index) => renderListItem(index, listItem, isLinkButton))
        : list.slice(0, maxVisableItems).map((listItem, index) => renderListItem(index, listItem, isLinkButton))}

      {!showAll && list.length > maxVisableItems ? (
        // TODO: Should the text on the button have an individual text? example '+{remainingItems}} weitere Skills'
        <StyledNormalButton_OnlyText onClick={handleClick}>{buttonText}</StyledNormalButton_OnlyText>
      ) : (
        ""
      )}
    </StyledListLayout>
  );
};

export default ListLayout;
