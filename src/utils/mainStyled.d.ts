import "styled-components";
interface IMode {
  backgroundColor: string;
  backgroundColorAccent: string;
  textColor: string;
  backgroundHoverColor: string;
  borderColor: string;
}

interface ISizes {
  gap: string;
  padding: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    sizes: {
      common: ISizes;
      navBar: {
        height: string;
        gap: string;
      };
    };
    palette: {
      common: IMode;
    };
  }
}
