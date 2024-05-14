import "styled-components";
interface IColorCommon {
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
interface IColorNavBar {
  backgroundColorNavigation: string;
  backgroundColor_ActiveHover: string;
}

interface IColorHeadline {
  textColor_level1: string;
  textColor_level2: string;
}

interface ISizes {
  gap: string;
  padding: string;
  lineHeight: string;
  borderRadius: string;
  fontSize: string;
  fontSizeAsFootnote: string;
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
    colors: {
      common: IColorCommon;
      headline: IColorHeadline;
      navBar: IColorNavBar;
    };
  }
}
