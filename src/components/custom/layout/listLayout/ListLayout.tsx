import { useState } from "react";
import { StyledNormalButton_OnlyText } from "../../button/styledButtonDefault";
import { StyledListLayout, StyledListLayoutItem } from "./styledListLayout";

export type ListItemType = {
  text: string;
  icon?: string;
};

type PersonalButtonTextType = {
  singular: string;
  plural: string;
};
export type ListLayoutProps = {
  list: ListItemType[];
  personalButtonText?: PersonalButtonTextType;
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
const ListLayout = ({ list, personalButtonText }: ListLayoutProps): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const maxVisableItems = 5;
  const remainingItems = list.length - maxVisableItems;

  const handleClick = () => setShowAll(true);

  const renderListItem = (index: number, item: ListItemType): JSX.Element => (
    <StyledListLayoutItem key={index}>
      {item.text}
      {item.icon ? ` ${item.icon}` : ""}
    </StyledListLayoutItem>
  );

  const personalText = personalButtonText
    ? `${remainingItems > 1 ? personalButtonText.plural : personalButtonText.singular}`
    : "";
  const buttonText = `+${remainingItems} ${
    remainingItems > 1 ? `weitere ${personalText}` : `weiterer ${personalText}`
  }`;

  return (
    <StyledListLayout>
      {showAll
        ? list.map((listItem, index) => renderListItem(index, listItem))
        : list.slice(0, maxVisableItems).map((listItem, index) => renderListItem(index, listItem))}
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
