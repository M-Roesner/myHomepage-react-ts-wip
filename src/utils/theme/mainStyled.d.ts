import "styled-components";

interface ICommonSizes {
  gap: string;
  padding: string;
  lineHeight: string;
  letterSpacing: string;
  borderRadius: string;
  fontSizeMax: string;
  fontSizeMin: string;
  fontSizeMobile: string;
  fontSizeAsFootnote: string;
}

interface INavBarSizes {
  height: string;
  height_mobile: string;
  gap: string;
  marginBottom: string;
}

interface IFooterSizes {
  height: string;
  marginTop: string;
}

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

interface IColorProgressBar {
  backgroundColor: string;
  color: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    sizes: {
      common: ICommonSizes;
      navBar: INavBarSizes;
      footer: IFooterSizes;
    };
    colors: {
      button: IButton;
      common: IColorCommon;
      ImageSliderFullScreen: IImageSliderFullScreen;
      headline: IColorHeadline;
      navBar: IColorNavBar;
      progressBar: IColorProgressBar;
    };
  }
}
