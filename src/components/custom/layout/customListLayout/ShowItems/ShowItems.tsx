/**
 * Displays the list elements, depending on the length of the elements to be displayed.
 *
 * @template T
 * @param {Object} props - The component props.
 * @param {T[]} props.list - An array of items to be displayed in the list.
 * @param {boolean} props.showAll - Flag to determine whether to show all items or just the first few.
 * @param {number} props.maxVisibleItems - Maximum number of elements that will be displayed with the first rendering.
 * @param {(item: T, index: number) => JSX.Element} props.renderItem - Function to render a single item.
 * @returns {JSX.Element[]} - Returns an array of JSX elements for the list items.
 */
const ShowItems = <T,>({
  list,
  showAll,
  maxVisibleItems,
  renderItem,
}: {
  list: T[];
  showAll: boolean;
  maxVisibleItems: number;
  renderItem: (item: T, index: number) => JSX.Element;
}): JSX.Element[] => {
  const slicedList = list.slice(0, maxVisibleItems);
  const renderList = showAll ? list : slicedList;
  return renderList.map((listItem, index) => renderItem(listItem, index));
};

export default ShowItems;
