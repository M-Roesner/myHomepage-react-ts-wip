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
      common?: {
        dark: string;
        light: string;
      };
    };
  }
}
