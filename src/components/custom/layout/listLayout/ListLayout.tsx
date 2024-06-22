// Components
import { StyledListLayout } from "./styledListLayout";
import ListItem from "./listItem/ListItem";
import CustomListLayout from "../customListLayout/CustomListLayout";

// Types
import { ListItemType } from "./listLayoutTypes";
import { NumerusType } from "../customListLayout/NumerusTextButton/NumerusTextButton";
import { RuleSet } from "styled-components";

/**
 * - list: An array of ListItemType objects.
 * - numerusButtonText (optional): Displays the text if there are more entries than are shown in the list.
 * - isLinkButton (optional) - default: false - Renderes as a clickable button.
 * - maxVisableItems (optional) - default: 5 - Maximum number of elements that will be displayed with the first rendering.
 */
type ListLayoutProps = {
  list: ListItemType[];
  numerusText?: NumerusType;
  maxVisibleItems?: number;
  $extraStyleRuleSet?: RuleSet<object>;
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
 * @param {string} props.numerusText (Optional) - The text to be displayed when there are more items present than currently shown in the list.
 * @param {number} props.maxVisableItems (Optional - default = 5) - Number of elements to be displayed in the first rendering. If more, a button will be displayed.
 * @param {RuleSet<object>} props.$extraStyleRuleSet (Optional) - Additional styles to be applied to the list layout component, using styled-components' RuleSet.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 */
const ListLayout = ({ list, numerusText, maxVisibleItems = 5, $extraStyleRuleSet }: ListLayoutProps): JSX.Element => {
  const renderCustomItem = (item: ListItemType, index: number) => <ListItem key={index} item={item} />;

  //  TODO: Adjust the structure of this list layout, it is too complicated.
  // It is currently used on the about and project pages.
  // Rename the list (maybe in the display flex layout)
  // List items are also too complicated. ( whether it is a button or a normal element )

  return (
    <StyledListLayout $extraStyle={$extraStyleRuleSet}>
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
