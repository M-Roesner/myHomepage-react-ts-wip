import { ListItemType } from "./listLayoutTypes";

/**
 * Converts an array of strings to an array of ListItemType objects.
 * Each string in the input array corresponds to the 'text' property of the ListItemType object.
 *
 * @param {string[]} strings - The array of strings to be converted.
 * @returns {ListItemType[]} - An array of ListItemType objects.
 */
export const stringArrayToListItems = (strings: string[]): ListItemType[] => {
  // Convert the input string array to an array of ListItemType objects
  return strings.map((text) => ({ text }));
};
