import "styled-components";
interface IColorCommon {
  backgroundColor: string;
  backgroundColorAccent: string;
  backgroundColorAccent_Transparent: string;
  backgroundColorHighlight: string;
  textColorMain: string;
  textColorSecond: string;
  textColorThird: string;
  backgroundColor_Hover: string;
  backgroundColorHighlight_Hover: string;
  backgroundColorHighlight_Transparent: string;
  borderColor: string;
}

interface IImageSliderFullScreen {
  backgroundColor: string;
}
interface IColorNavBar {
  backgroundColorNavigation: string;
  backgroundColor_ActiveHover: string;
}

interface IButton {
  backgroundColor: string;
  backgroundColor_Hover: string;
  backgroundColor_Active: string;
}

interface IColorHeadline {
  textColor_level1: string;
  textColor_level2: string;
}

interface ISizes {
  gap: string;
  padding: string;
  lineHeight: string;
  letterSpacing: string;
  borderRadius: string;
  fontSize: string;
  fontSizeMobile: string;
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
        marginBottom: string;
      };
      footer: {
        height: string;
        marginTop: string;
      };
    };
    colors: {
      button: IButton;
      common: IColorCommon;
      ImageSliderFullScreen: IImageSliderFullScreen;
      headline: IColorHeadline;
      navBar: IColorNavBar;
    };
  }
}
