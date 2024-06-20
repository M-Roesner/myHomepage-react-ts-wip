import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * A React component that scrolls to an anchor on the page when the URL changes.
 *
 * Uses the React Hook useLocation to monitor changes in the URL.
 * If the URL contains an anchor, it scrolls to the corresponding anchor position smoothly.
 *
 * Source: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
 *
 * @returns {null} This component renders nothing; it only executes scrolling logic.
 */
export function ScrollToAnchor(): null {
  const location = useLocation(); // Get the current location object from React Router
  const lastHash = useRef(""); // Ref to store the last hash value

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    // Check if the current URL contains a hash
    if (location.hash) {
      console.log(location.hash);

      lastHash.current = location.hash.slice(1); // Save hash for further use after navigation, without the '#' character
      console.log(lastHash);
    }

    // If there's a hash and an element with that ID exists on the page
    if (lastHash.current && document.getElementById(lastHash.current)) {
      // Use setTimeout to wait a bit before scrolling to ensure the element is in the DOM
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the element
        lastHash.current = ""; // Reset the last hash
      }, 100); // Delay in milliseconds
    }
  }, [location]); // Dependency array with location to re-run effect on URL change

  return null; // This component does not render anything
}
