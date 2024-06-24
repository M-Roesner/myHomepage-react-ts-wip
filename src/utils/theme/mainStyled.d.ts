import "styled-components";

interface ICommonSizes {
  gap: string;
  padding: string;
  paddingResponsive: string;
  lineHeight: string;
  letterSpacing: string;
  borderRadius: string;
  fontSizeMax: string;
  fontSizeMin: string;
  fontSizeMobile: string;
  fontSizeAsFootnote: string;
}
interface IColorCommonSecondary {
  default: string;
  transparent: string;
  transparentStrong: string;
  border: string;
}

interface IColorCommonAction {
  default: string;
  transparent: string;
  hover: string;
  border: string;
  active: string;
  activeTransparent: string;
  activeHover: string;
  activeBorder: string;
}

interface IColorCommonText {
  primary: string;
  secondary: string;
  lightOnDark: string;
  darkOnLight: string;
  aczent: string;
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
  primary: string;
  secondary: IColorCommonSecondary;
  action: IColorCommonAction;
  text: IColorCommonText;
}

interface IColorHeadline {
  textColor_level1: string;
  textColor_level2: string;
  textColor_level_other: string;
}

interface IColorProgressBar {
  backgroundColor: string;
  color: string;
}

interface IZindex {
  imageFullscreen: number;
  navBar_Main: number;
  navBar_Aside: number;
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
      common: IColorCommon;
      headline: IColorHeadline;
      progressBar: IColorProgressBar;
    };
    zIndex: IZindex;
  }
}
