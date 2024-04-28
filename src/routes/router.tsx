// Components
import { createBrowserRouter } from "react-router-dom";
import { App, NotFoundPage, HomePage, AboutMePage, MyPortfolio, Portfolio, ImprintPage, Footer } from "./index.ts";

/**
 * Enum representing different route types in the application, to navigate correctly.
 */
export enum ERouteType {
  ABOUT_ME = "aboutMe",
  HOME = "",
  MY_PORTFOLIO = "myPortfolio",
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
      // TODO: Moved folder for testing purposes. correct order: "/" & <HomePage /> | "/aboutMe" & <AboutMePage /> | "/myPortfolio" & <MyPortfolio />
      {
        path: `/${ERouteType.HOME}`,
        element: <HomePage />,
      },
      {
        path: `/${ERouteType.ABOUT_ME}`,
        element: <AboutMePage />,
        children: [
          {
            path: `/${ERouteType.ABOUT_ME}/:skillId/:skillCategory`,
            element: <AboutMePage />,
          },
        ],
      },
      {
        path: `/${ERouteType.MY_PORTFOLIO}`,
        element: <MyPortfolio />,
      },
      {
        path: `/${ERouteType.MY_PORTFOLIO}/:portfolioCategory/:portfolioId`,
        element: <Portfolio />,
      },
      { path: "/", element: <Footer /> },
      { path: `/${ERouteType.IMPRINT}`, element: <ImprintPage /> },
    ],
  },
]);
