# Configuration of the theme with styled components using TypeScript

## How do you use 'styled components' with TypeScript?

1.  install types: `npm i @types/styled-components -D`
2.  Create a declaration file (example):

    ```ts
    // 'styled.d.ts'
    import "styled-components";
    interface IMode {
      backgroundColor: string;
      textColor: string;
    }

    declare module "styled-components" {
      export interface DefaultTheme {
        fontFamily: string;
        palette: {
          darkMode: IMode;
          lightMode: IMode;
        };
      }
    }
    ```

3.  Create a theme file (example):

    ```ts
    // theme.ts
    import { DefaultTheme } from "styled-components";

    export const defaultTheme: DefaultTheme = {
      fontFamily: '"IBM", monospace',
      palette: {
        darkMode: {
          backgroundColor: "#383838",
          textColor: "#f3f3f3",
        },
        lightMode: {
          backgroundColor: "#f3f3f3",
          textColor: "#383838",
        },
      },
    };
    ```

4.  Implement Theme Provider (example):

    ```tsx
    // main.tsx
    import { ThemeProvider } from "styled-components";
    import { defaultTheme } from "./theme.ts";
    ...
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <ThemeProvider theme={defaultTheme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
    ```
