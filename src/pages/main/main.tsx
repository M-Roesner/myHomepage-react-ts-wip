import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Styled-Component
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../utils/theme/theme.ts";
import StyledMain from "./styledMain";
import "./index.css";

// Routes
import { router } from "../../routes/router.tsx";
import { StyledIndex } from "./styledIndex.ts";
import GlobalStyles from "../../utils/theme/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StyledIndex>
        <StyledMain>
          <RouterProvider router={router} />
        </StyledMain>
      </StyledIndex>
    </ThemeProvider>
  </React.StrictMode>
);
