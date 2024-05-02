import { useState } from "react";

// Components
import {
  ListLayoutItemImage,
  StyledListLayout,
  StyledListLayoutItem,
  StyledListLayoutItemForButton,
} from "./styledListLayout";
import { StyledNormalButton_OnlyText } from "../../button/styledButtonDefault";
import LinkButton from "../../button/linkButton/LinkButton";

// Types
import { ERouteType } from "../../../../routes/router";
import { ListItemType, ListLayoutProps, PersonalNumerusType } from "./listLayoutTypes";

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
const RenderListItemWithButton = (index: number, item: ListItemType): JSX.Element => {
  const url =
    typeof item.buttonUrl === "string"
      ? item.buttonUrl
      : item.buttonUrl?.route && Object.values(ERouteType).includes(item.buttonUrl.route)
      ? `/${item.buttonUrl.route}/`
      : "";
  return (
    <StyledListLayoutItemForButton key={index}>
      <LinkButton to={url}>
        {item.text}
        {item.iconSrc ? <ListLayoutItemImage src={item.iconSrc} /> : ""}
        <ListLayoutItemImage src={item.iconSrc} />
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
const RenderListItem = (index: number, item: ListItemType, isLinkButton: boolean): JSX.Element => {
  if (
    isLinkButton &&
    item.buttonUrl &&
    (typeof item.buttonUrl === "string" || Object.values(ERouteType).includes(item.buttonUrl.route))
  )
    return RenderListItemWithButton(index, item);
  return (
    <StyledListLayoutItem key={index}>
      {item.text}
      {item.iconSrc ? <ListLayoutItemImage src={item.iconSrc} /> : ""}
    </StyledListLayoutItem>
  );
};

/**
 * Displays a button with a personal text if several elements should be displayed.
 */
const ShowPersonalButton = ({
  personalButtonText,
  remainingItems,
  onClick,
}: {
  personalButtonText: PersonalNumerusType | undefined;
  remainingItems: number;
  onClick: () => void;
}) => {
  const personalText = personalButtonText
    ? `${remainingItems > 1 ? personalButtonText.plural : personalButtonText.singular}`
    : "";
  const buttonText = `+${remainingItems} weitere ${personalText}`;
  return (
    // TODO: Should the text on the button have an individual text? example '+{remainingItems}} weitere Skills'
    <StyledNormalButton_OnlyText onClick={onClick}>{buttonText}</StyledNormalButton_OnlyText>
  );
};

/**
 * Displays the list elements, depending on the length of the elements to be displayed.
 */
const ShowItems = ({
  list,
  showAll,
  maxVisableItems,
  isLinkButton,
}: {
  list: ListItemType[];
  showAll: boolean;
  maxVisableItems: number;
  isLinkButton: boolean;
}) => {
  const slicedList = list.slice(0, maxVisableItems);
  return showAll
    ? list.map((listItem, index) => RenderListItem(index, listItem, isLinkButton))
    : slicedList.map((listItem, index) => RenderListItem(index, listItem, isLinkButton));
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
 * @param {boolean} props.isLinkButton - Indicates whether the list item should be rendered as a clickable button.
 * @param {number} props.maxVisableItems - Number of elements to be displayed in the first rendering. If more, a button will be displayed.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 */
const ListLayout = ({
  list,
  personalButtonText,
  isLinkButton = false,
  maxVisableItems = 5,
}: ListLayoutProps): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const remainingItems = list.length - maxVisableItems;

  const handleClick = () => setShowAll(true);

  // FIXME: NEW structure for the functionalities of this component!!!! This does not look good.

  // 1. Render list item ....
  return (
    <StyledListLayout>
      <ShowItems list={list} showAll={showAll} maxVisableItems={maxVisableItems} isLinkButton={isLinkButton} />
      {!showAll && list.length > maxVisableItems ? (
        <ShowPersonalButton
          personalButtonText={personalButtonText}
          remainingItems={remainingItems}
          onClick={handleClick}
        />
      ) : (
        ""
      )}
    </StyledListLayout>
  );
};

export default ListLayout;
