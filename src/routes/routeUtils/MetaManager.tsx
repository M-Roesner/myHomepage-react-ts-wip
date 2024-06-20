import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ERouteType, routeMeta } from "../router";

/**
 * Component to manage dynamic updating of document title and meta description
 * based on the current route using React Router.
 */
export const MetaManager = (): null => {
  const location = useLocation();

  useEffect(() => {
    // Remove trailing slash if present in the pathname
    const currentPath = location.pathname.replace(/\/$/, "");

    // Find the matching route key based on the current path
    const route = Object.keys(ERouteType).find((key) =>
      currentPath.includes(ERouteType[key as keyof typeof ERouteType])
    );

    if (route) {
      // Cast the route key to keyof typeof ERouteType
      const routeKey = route as keyof typeof ERouteType;

      // Update document title based on routeMeta
      document.title = routeMeta[ERouteType[routeKey]].title;

      // Update or create meta description tag based on routeMeta
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", routeMeta[ERouteType[routeKey]].description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = routeMeta[ERouteType[routeKey]].description;
        document.head.appendChild(meta);
      }
    }
  }, [location.pathname]);

  // Return null as this component doesn't render anything visible
  return null;
};
