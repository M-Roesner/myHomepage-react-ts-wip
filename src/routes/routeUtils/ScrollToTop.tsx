import { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

/**
 * Scrolls to the top of the page when the route changes,
 * unless parameters are present in the URL. In that case, it preserves the scroll position.
 * This function is intended to be used as a scroll-to-top behavior in React Router applications.
 *
 * @returns {null} This function does not render any UI components.
 */
export function ScrollToTop(): null {
  const location = useLocation(); // Get the current location object from React Router
  const lastPathWithoutParams = useRef<string | null>(null); // Ref to store the last path without parameters
  const params = useParams(); // Get the parameters from the current URL

  useEffect(() => {
    // Calculate the number of parameters in the URL
    const paramsLength = Object.keys(params).length;

    // Split the pathname into an array of parts using '/' as the separator
    const slittedPath = location.pathname.split("/");

    // Get the length of the splitted pathname array
    const slittedPathLength = slittedPath.length;

    // Extract the current path without parameters by slicing the splitted pathname array
    const currentPathWithoutParams = slittedPath.slice(0, slittedPathLength - paramsLength).join("/");

    // If the current path without parameters is different from the last recorded path without parameters,
    // scroll to the top of the page
    if (currentPathWithoutParams !== lastPathWithoutParams.current) {
      // window.scrollTo(0, 0); // Uncomment this line for immediate scroll

      // Scroll smoothly to the top of the document
      // `document.documentElement` refers to the root element of the document (the <html> element).
      document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update the last recorded path without parameters
    lastPathWithoutParams.current = currentPathWithoutParams;
  }, [location.pathname, params]);

  // This function returns null as it doesn't render any UI components
  return null;
}
