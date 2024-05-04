import { useState } from "react";

// Components
import { StyledListLayout } from "./styledListLayout";
import { StyledNormalButton_OnlyText } from "../../button/styledButtonDefault";

// Types
import { ListItemType, ListLayoutProps, NumerusType } from "./listLayoutTypes";
import ListItem from "./listItem/ListItem";

/**
 * Displays a button with a individual text if several elements should be displayed.
 *
 * default:
 * - singular= "weiteres"
 * - plural= "weitere"
 */
const NumerusTextButton = ({
  numerusText,
  remainingItems,
  onClick,
}: {
  numerusText?: NumerusType;
  remainingItems: number;
  onClick: () => void;
}) => {
  const individualText = numerusText
    ? `${remainingItems > 1 ? numerusText.plural : numerusText.singular}`
    : `${remainingItems > 1 ? "weitere" : "weiteres"}`;
  const buttonText = `+${remainingItems} ${individualText}`;
  return <StyledNormalButton_OnlyText onClick={onClick}>{buttonText}</StyledNormalButton_OnlyText>;
};

/**
 * Displays the list elements, depending on the length of the elements to be displayed.
 */
const ShowItems = ({
  list,
  showAll,
  maxVisableItems,
}: {
  list: ListItemType[];
  showAll: boolean;
  maxVisableItems: number;
}) => {
  const slicedList = list.slice(0, maxVisableItems);
  const renderList = showAll ? list : slicedList;
  return renderList.map((listItem, index) => <ListItem key={index} item={listItem} />);
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
 * @param {string} props.numerusText  - The text to be displayed when there are more items present than currently shown in the list.
 * @param {number} props.maxVisableItems (Optional - default = 5) - Number of elements to be displayed in the first rendering. If more, a button will be displayed.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 */
const ListLayout = ({ list, numerusText, maxVisableItems = 5 }: ListLayoutProps): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const remainingItems = list.length - maxVisableItems;

  const handleClick = () => setShowAll(true);

  return (
    <StyledListLayout>
      <ShowItems list={list} showAll={showAll} maxVisableItems={maxVisableItems} />
      {!showAll && list.length > maxVisableItems ? (
        <NumerusTextButton numerusText={numerusText} remainingItems={remainingItems} onClick={handleClick} />
      ) : (
        ""
      )}
    </StyledListLayout>
  );
};

export default ListLayout;
