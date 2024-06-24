import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
  fontFamily: '"IBM", monospace', // The default font is configured with GlobalStyles on the body tag.
  sizes: {
    common: {
      gap: "5px",
      padding: "10px",
      paddingResponsive: "clamp(5px, 1vw, 10px)",
      lineHeight: "2.5ch",
      letterSpacing: "0.05rem",
      borderRadius: "5px",
      fontSizeMax: "1.3rem",
      fontSizeMin: "0.9rem",
      fontSizeMobile: "1rem",
      fontSizeAsFootnote: "0.8rem",
    },
    navBar: {
      height: "80px",
      height_mobile: "64px",
      gap: "5px",
      marginBottom: "2rem",
    },
    footer: {
      height: "50px",
      marginTop: "2rem",
    },
  },
  colors: {
    common: {
      primary: "#26272c",
      secondary: {
        default: "rgb(61 61 61)",
        transparent: "rgb(61 61 61 / 30%)",
        transparentStrong: "rgb(38 39 44 / 90%)",
        border: "rgb(61 61 61)",
      },
      action: {
        default: "rgb(39 73 103)",
        transparent: "rgb(39 73 103 / 70%)",
        hover: "#213a55",
        border: "#213a55",
        active: "rgb(95 130 162)",
        activeTransparent: "rgb(95 130 162 / 70%)",
        activeHover: "#213a55",
        activeBorder: "#213a55",
      },
      text: {
        primary: "#cecece",
        secondary: "#707070",
        lightOnDark: "#f2f2f2",
        darkOnLight: "#26272c",
        aczent: "#34abea",
      },
    },
    headline: {
      textColor_level1: "#cfce79", // yellow
      textColor_level2: "#4e8a47", // green
      textColor_level_other: "white", // white
    },
    progressBar: {
      backgroundColor: "#91a187",
      color: "#e7e7e7",
    },
  },
};
