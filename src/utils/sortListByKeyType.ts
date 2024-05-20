/**
 * Sorts a list of objects by a specified key.
 *
 * @param {T[]} list - The list of objects to be sorted.
 * @param {keyof T} sortBy - The key by which the list should be sorted.
 * @param {boolean} [descending=true] (default is true) - Optional parameter to specify whether to sort in descending order. Set to false for ascending order.
 * @returns {T[]} - The sorted list.
 *
 * @remarks
 * This function supports sorting by string, number, boolean, and Date types.
 * For other types, the order of the elements remains unchanged.
 */
export const sortListByKeyType = <T>(list: T[], sortBy: keyof T, descending: boolean = true): T[] => {
  return list.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    // Check if the sortBy field is defined in both objects
    if (valueA === undefined && valueB === undefined) return 0; // If both are undefined, they remain in the same order
    if (valueA === undefined) return 1; // If only a.sortBy is undefined, it should be sorted towards the end
    if (valueB === undefined) return -1; // If only b.sortBy is undefined, it should be sorted towards the beginning

    // Determine the sorting order based on the descending parameter
    // If descending is true, sortOrder is -1 (descending order), otherwise it is 1 (ascending order)
    const sortOrder = descending ? -1 : 1;

    // Compare the values of sortBy depending on the type to determine the order.
    // Sort strings
    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortOrder * valueA.localeCompare(valueB);
    }

    // Sort dates
    if (valueA instanceof Date && valueB instanceof Date) {
      return sortOrder * (valueA.getTime() - valueB.getTime());
    }

    // Sort numbers
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder * (valueA - valueB);
    }

    // Sort booleans
    if (typeof valueA === "boolean") {
      return sortOrder * (valueA === valueB ? 0 : valueA ? -1 : 1);
    }

    // Fallback for other types if necessary
    return 0;
  });
};
