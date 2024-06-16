import { useState } from "react";

// Component and its type
import NumerusTextButton, { NumerusType } from "./NumerusTextButton/NumerusTextButton";
import ShowItems from "./ShowItems/ShowItems";

/**
 * Displays a list of items without any styles, initially showing a maximum number of items, with a button to show the rest.
 *
 * @template T
 * @param {CustomListLayoutProps<T>} props - The props containing the list items and render function.
 * @property {T[]} props.list - An array of items to be displayed in the list.
 * @property {NumerusType} [props.numerusText] - Displays the text if there are more entries than are shown in the list.
 * @property {number} [props.maxVisibleItems=5] - Maximum number of elements that will be displayed with the first rendering.
 * @property {(item: T, index: number) => JSX.Element} props.renderItem - Function to render a single item.
 * @returns {JSX.Element} - Returns the JSX for the rendered list component.
 *
 * @example
 * const CustomList = ({ list }: CustomListProps): JSX.Element => {
 *   // This function renders each individual item in the list.
 *   const renderCustomItem = (item: CustomItemType, index: number) => (
 *     // The 'index' is used as the key for the rendered item.
 *     // 'item' represents the current item being iterated over in the list.
 *     <CustomItem key={index} data={item} />
 *   );
 *
 *   if (!list) return <></>;
 *
 *   return (
 *     <StyledCustomLayout>
 *       <CustomListLayout
 *         list={list}
 *         numerusText={{ singular: "weitere Fähigkeit", plural: "weitere Fähigkeiten" }}
 *         maxVisibleItems={4}
 *         renderItem={renderCustomItem}
 *       />
 *     </StyledCustomLayout>
 *   );
 * };
 *
 * // In the above example:
 * // - `list` is the array of items to be displayed.
 * // - `renderCustomItem` is the function that specifies how each item should be rendered.
 * // - The `ShowItems` component maps over the list and renders each item using the `renderCustomItem` function.
 * // - The `index` parameter is used to give each item a unique key, which is important for rendering lists in React.
 */
const CustomListLayout = <T,>({
  list,
  renderItem,
  numerusText,
  maxVisibleItems = 5,
}: {
  list: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  numerusText?: NumerusType;
  maxVisibleItems?: number;
}): JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const remainingItems = list.length - maxVisibleItems;

  const handleClick = () => setShowAll(true);

  return (
    <>
      <ShowItems list={list} showAll={showAll} maxVisibleItems={maxVisibleItems} renderItem={renderItem} />
      {!showAll && list.length > maxVisibleItems && (
        <NumerusTextButton numerusText={numerusText} remainingItems={remainingItems} onClick={handleClick} />
      )}
    </>
  );
};

export default CustomListLayout;
