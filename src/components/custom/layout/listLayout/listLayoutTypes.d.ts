import { ERouteType } from "../../../../routes/router";

// Types
export type RouteType = {
  route: ERouteType;
};
/**
 * - text: Displays only the given text.
 * - iconSrc (optional): Displays a icon according to the given icon string.
 * - buttonUrl (optional): Navigates to the given address or page route.
 */
export type ListItemType = {
  text?: string;
  iconSrc?: string;
  buttonUrl?: string | RouteType;
};

/**
 * Defines the grammatical number for personal nouns, providing singular and plural forms.
 */
export type PersonalNumerusType = {
  singular: string;
  plural: string;
};

/**
 * - list: An array of ListItemType objects.
 * - personalButtonText (optional): Displays the text if there are more entries than are shown in the list.
 * - isLinkButton (optional) - default: false - Renderes as a clickable button.
 * - maxVisableItems (optional) - default: 5 - Maximum number of elements that will be displayed with the first rendering.
 */
export type ListLayoutProps = {
  list: ListItemType[];
  personalButtonText?: PersonalNumerusType;
  isLinkButton?: boolean;
  maxVisableItems?: number;
};
