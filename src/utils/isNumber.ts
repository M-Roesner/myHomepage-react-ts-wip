/**
 * Checks if a given value is a valid number.
 * @param value The value to check, which can be either a string or a number.
 */
export const isNumber = (value: string | number): boolean => {
  const parsedValue = Number(value);
  return !isNaN(parsedValue);
};
