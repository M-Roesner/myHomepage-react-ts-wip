import { ERouteType } from "../../../../routes/router";

// Types
// TODO: routing with route and params
export type ListItemRouteType = {
  route: ERouteType;
  params?: string[];
};

/**
 * - text (optional): Displays only the given text.
 * - iconSrc (optional): Displays a icon according to the given icon string.
 * - buttonUrl (optional): Navigates to the given address or page route.
 */
export type ListItemType = {
  text?: string;
  iconSrc?: string;
  buttonUrl?: string | ListItemRouteType;
};

/**
 * - list: An array of ListItemType objects.
 * - numerusButtonText (optional): Displays the text if there are more entries than are shown in the list.
 * - isLinkButton (optional) - default: false - Renderes as a clickable button.
 * - maxVisableItems (optional) - default: 5 - Maximum number of elements that will be displayed with the first rendering.
 */
export type ListLayoutProps = {
  list: ListItemType[];
  numerusText?: NumerusType;
  maxVisibleItems?: number;
};
