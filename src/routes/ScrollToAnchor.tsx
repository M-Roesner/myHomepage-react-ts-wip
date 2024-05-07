import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * A React component that scrolls to an anchor on the page when the URL changes.
 *
 * Uses the React Hook useLocation to monitor changes in the URL.
 * If the URL contains an anchor, it scrolls to the corresponding anchor position.
 *
 * Source: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
 *
 * @returns {null} This component renders nothing; it only executes scrolling logic.
 */
function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
