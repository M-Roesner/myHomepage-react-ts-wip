/**
 * Checks if the provided string represents a valid CSS color.
 * @param {string} str - The string to check if it represents a valid CSS color.
 * @returns {boolean} - True if the string represents a valid CSS color, false otherwise.
 */
export const isValidColor = (str: string): boolean => {
  // Create a temporary style element to apply the color
  const tempStyle = new Option().style;
  tempStyle.color = str; // Apply the color to the temporary style element
  return tempStyle.color !== ""; // Check if the color was applied successfully
};
