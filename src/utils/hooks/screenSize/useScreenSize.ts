import { useState, useEffect } from "react";

// Helpers
import { determineDeviceType } from "./helper";

/**
 * Helper function for determining the size of the device and the type.
 *
 *  deviceType:
 * - width <= 600 = "mobile"
 * - width <= 900 = "tablet"
 * - width <= 1200 = "laptop"
 * - else "desktop"
 *
 * source: https://medium.com/@josephat94/building-a-simple-react-hook-to-detect-screen-size-404a867fa2d2
 *
 * more about window screen information: https://www.mediaevent.de/javascript/window-screen.html
 * - window.orientation
 *
 * - viewport sizes: https://www.mediaevent.de/css/viewport-mobile.html
 */
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    deviceType: determineDeviceType(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        deviceType: determineDeviceType(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
