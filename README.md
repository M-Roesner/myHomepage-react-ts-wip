# My new homepage project

This repository contains my new homepage, which is being developed with TypeScript and React.

## Packages used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
  - [How do you use 'styled components' with TypeScript?](#how-do-you-use-styled-components-with-typescript)
  - [Guide: Theme with styled-components-and-typescript | medium.com](https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3)
  - !!! ['emotion' an alternative to 'styled components'](https://emotion.sh/docs/typescript)
- [Icons: fontawesome](https://fontawesome.com/)
  - [Install guide](https://docs.fontawesome.com/web/use-with/react/)
  - [Icon search](https://fontawesome.com/search)
  - [Use icons with react](https://docs.fontawesome.com/web/use-with/react/add-icons)

## Possible packages for usage:

- [React Select: for select Input control](https://react-select.com/home)

## Status

This project is currently a work in progress. It is under active development and may not be fully completed. Changes and updates will be made regularly.

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
