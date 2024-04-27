// Components
import { createBrowserRouter } from "react-router-dom";
import { App, NotFoundPage, HomePage, AboutMePage, MyPortfolio, ImprintPage, Footer } from "./index.ts";

/**
 * Provides routes for navigation.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      // TODO: Moved folder for testing purposes. correct order: "/" & <HomePage /> | "/aboutMe" & <AboutMePage /> | "/myPortfolio" & <MyPortfolio />
      {
        path: "/",
        element: <AboutMePage />,
        children: [
          {
            path: "/:skillId/:skillCategory",
            element: <AboutMePage />,
          },
        ],
      },
      {
        path: "/aboutMe",
        element: <HomePage />,
      },
      {
        path: "/myPortfolio",
        element: <MyPortfolio />,
      },
      { path: "/", element: <Footer /> },
      { path: "/imprint", element: <ImprintPage /> },
    ],
  },
]);
