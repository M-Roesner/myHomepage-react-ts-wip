import { DeviceType } from "./screenSizeType";

/**
 * Determine the device type of the device according to the screen size.
 *
 * Screen size width / type:
 * - width <= 400 = "mobile"
 * - width <= 800 = "tablet"
 * - width <= 1200 = "laptop"
 * - else "desktop"
 *
 * @param {number} width - The width of the screen.
 * @returns {DeviceType} - Returns according device type.
 */
export const determineDeviceType = (width: number): DeviceType => {
  if (width <= 400) {
    return "mobile";
  } else if (width <= 800) {
    return "tablet";
  } else if (width <= 1200) {
    return "laptop";
  }
  return "desktop";
};
