import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Styled-Component
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../utils/theme.ts";
import StyledContent from "./styledMain";
import "./index.css";

// Components
import { App, NotFoundPage, HomePage, AboutMePage, MyPortfolio, ImprintPage, Footer } from "./index.ts";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <StyledContent>
        <RouterProvider router={router} />
      </StyledContent>
    </ThemeProvider>
  </React.StrictMode>
);
