import { createGlobalStyle } from "styled-components";

/**
 * Global styles to import IBM Plex Mono font family and set the font on the body element.
 *
 * To use this, add <GlobalStyles /> to the rendered component.
 *
 * Example:
 * import GlobalStyles from "../../utils/theme/GlobalStyles.ts";
 *
 * ReactDOM.createRoot(document.getElementById("root")!).render(
 *   <React.StrictMode>
 *     <ThemeProvider theme={defaultTheme}>
 *
 *       <GlobalStyles />
 *
 *       <RouterProvider router={router} />
 *     </ThemeProvider>
 *   </React.StrictMode>
 * );
 */
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IBM';
    src: url('/fonts/IBMPlexMono-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'IBM';
    src: url('/fonts/IBMPlexMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'IBM';
    src: url('/fonts/IBMPlexMono-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'IBM';
    src: url('/fonts/IBMPlexMono-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "IBM" ,monospace;
  }
`;

export default GlobalStyles;