import "styled-components";
interface IMode {
  backgroundColor: string;
  backgroundColorAccent: string;
  backgroundColorHighlight: string;
  textColorMain: string;
  textColorSecond: string;
  textColorThird: string;
  backgroundColor_Hover: string;
  backgroundColorHighlight_Hover: string;
  borderColor: string;
}

interface ISizes {
  gap: string;
  padding: string;
  lineHeight: string;
  borderRadius: string;
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
