import "styled-components";
interface IMode {
  backgroundColor: string;
  textColor: string;
  backgroundHoverColor: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    navBar: {
      height: string;
    };
    palette: {
      common: IMode;
      footer: {
        backgroundColor: string;
      };
      header: {
        backgroundColor: string;
      };
    };
  }
}
