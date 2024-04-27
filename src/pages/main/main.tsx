import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Styled-Component
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../utils/theme.ts";
import StyledContent from "./styledMain";
import "./index.css";

// Routes
import { router } from "../../routes/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <StyledContent>
        <RouterProvider router={router} />
      </StyledContent>
    </ThemeProvider>
  </React.StrictMode>
);
