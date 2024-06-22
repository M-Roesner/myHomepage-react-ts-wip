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
