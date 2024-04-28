/**
 * Checks if a given value is a valid number.
 *
 * @param value The value to check, which can be either a string or a number.
 */
export const isNumber = (value: string | number): boolean => {
  const parsedValue = Number(value);
  const isValid = !isNaN(parsedValue);
  return isValid;
};

/**
 * Checks and returns a number or undefined if the value is not a number.
 *
 * @param {string | number} value Can be either a string or a number.
 * @returns {number | undefined}
 */
export const checkNumber = (value: string | number): number | undefined => {
  const result = typeof value === "string" && isNumber(value) ? Number(value) : undefined;
  if (typeof result !== "number") return undefined;
  return result;
};
