// Components
import { createBrowserRouter } from "react-router-dom";
import { App, NotFoundPage, HomePage, AboutMePage, MyPortfolio, Project, ImprintPage, Footer } from "./index.ts";

/**
 * Enum representing different route types in the application, to navigate correctly.
 */
export enum ERouteType {
  ABOUT_ME = "aboutMe",
  MY_PORTFOLIO = "myPortfolio",
  PROJECT = "project",
  IMPRINT = "imprint",
  HOME = "", // Home must be at the end so that the correct meta description can be added in the head tag.
}

/**
 * Provides routes for navigation.
 * Use {@link ERouteType} for correct routing.
 * @enum {ERouteType}
 */
export const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/test-react-app",
  }
);

type RouteMeta = {
  [key in ERouteType]: {
    title: string;
    description: string;
  };
};

export const routeMeta: RouteMeta = {
  [ERouteType.HOME]: {
    title: "Startseite",
    description:
      "Willkommen auf meiner Startseite. Entdecken Sie meine Entwicklungs-Roadmap und erfahren Sie mehr über meine Projekte, Fähigkeiten und Portfolio.",
  },
  [ERouteType.ABOUT_ME]: {
    title: "Über mich",
    description:
      "Erfahre mehr über meinen beruflichen Werdegang. Als Fachinformatiker mit Fokus auf Anwendungsentwicklung bringe ich Kenntnisse in React.js und TypeScript mit.",
  },
  [ERouteType.MY_PORTFOLIO]: {
    title: "Portfolio",
    description:
      "Entdecken Sie meine vielseitigen Projekte während meiner Umschulung, Praktika und Freizeit, inklusive Homepage-Entwicklung, Spielen und mehr.",
  },
  [ERouteType.IMPRINT]: {
    title: "Impressum",
    description:
      "Erfahren Sie mehr über das Impressum dieser Webseite und die rechtlichen Informationen des Anbieters.",
  },
  [ERouteType.PROJECT]: {
    title: "Projekt",
    description: "Entdecken Sie ein ausgewähltes Projekt aus meinem Portfolio.",
  },
};
