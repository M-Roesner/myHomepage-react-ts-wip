/**
 * Enum representing supported languages.
 */
export enum ELanguage {
  ENGLISH_US = "en-US",
  ENGLISH_UK = "en-GB",
  GERMAN = "de-DE",
}

/**
 * Formats the given date according to the specified language.
 *
 * @param {Date} date - The date to format.
 * @param {ELanguage} language - The language identifier for the desired date format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date: Date, language: ELanguage): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  };

  return new Intl.DateTimeFormat(language, options).format(date);
};
