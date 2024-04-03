import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styled-Component
import StyledContent from "./styledContent.ts";
import "./index.css";

// Components
import App from "./App.tsx";
import NotFoundPage from "./pages/errorPage/NotFoundPage.tsx";
import HomePage from "./components/home/HomePage.tsx";
import AboutMePage from "./components/aboutMe/AboutMePage.tsx";
import MyPortfolio from "./components/myPortfolio/MyPortfolio.tsx";
import ImprintPage from "./components/Imprint/ImprintPage.tsx";
import Footer from "./components/footer/footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/aboutMe",
        element: <AboutMePage />,
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
    <StyledContent>
      <RouterProvider router={router} />
    </StyledContent>
  </React.StrictMode>
);
