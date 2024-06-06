// Components
import { createBrowserRouter } from "react-router-dom";
import { App, NotFoundPage, HomePage, AboutMePage, MyPortfolio, Project, ImprintPage, Footer } from "./index.ts";

/**
 * Enum representing different route types in the application, to navigate correctly.
 */
export enum ERouteType {
  ABOUT_ME = "aboutMe",
  HOME = "",
  MY_PORTFOLIO = "myPortfolio",
  PROJECT = "project",
  IMPRINT = "imprint",
}

/**
 * Provides routes for navigation.
 * Use {@link ERouteType} for correct routing.
 * @enum {ERouteType}
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: `/${ERouteType.HOME}`,
        element: <HomePage />,
      },
      {
        path: `/${ERouteType.ABOUT_ME}`,
        element: <AboutMePage />,
        children: [
          {
            path: `/${ERouteType.ABOUT_ME}/:skillCategory/:skillId`,
            element: <AboutMePage />,
          },
        ],
      },
      {
        path: `/${ERouteType.MY_PORTFOLIO}`,
        element: <MyPortfolio />,
      },
      {
        path: `/${ERouteType.PROJECT}/:portfolioCategory/:portfolioId`,
        element: <Project />,
      },
      { path: "/", element: <Footer /> },
      { path: `/${ERouteType.IMPRINT}`, element: <ImprintPage /> },
    ],
  },
]);
