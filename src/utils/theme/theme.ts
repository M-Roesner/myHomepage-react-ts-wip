import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
  fontFamily: '"IBM", monospace', // The default font is configured with GlobalStyles on the body tag.
  sizes: {
    common: {
      gap: "5px",
      padding: "10px",
      lineHeight: "2.5ch",
      letterSpacing: "0.05rem",
      borderRadius: "5px",
      fontSize: "1.2rem",
      fontSizeMobile: "1rem",
      fontSizeAsFootnote: "0.8rem",
    },
    navBar: {
      height: "80px",
      gap: "5px",
      marginBottom: "2rem",
    },
    footer: {
      height: "50px",
      marginTop: "2rem",
    },
  },
  colors: {
    button: {
      // orange
      backgroundColor: "rgb(184 97 15)",
      backgroundColor_Hover: "#ff9100",
      backgroundColor_Active: "rgb(184 97 15 / 70%)",
    },
    common: {
      backgroundColor: "#383838", // dark gray
      backgroundColor_Hover: "#4c4c4c",
      backgroundColorAccent: "rgb(61 61 61)",
      backgroundColorAccent_Transparent: "rgb(61 61 61 / 70%)",
      backgroundColorHighlight: "rgb(184 97 15)", // orange
      backgroundColorHighlight_Hover: "#ff9100", // orange
      backgroundColorHighlight_Transparent: "rgb(184 97 15 / 70%)", // orange
      textColorMain: "#cecece",
      textColorSecond: "#e7e7e7",
      textColorThird: "rgb(184 97 15)",
      borderColor: "#5c606d",
    },
    fullScreen: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    headline: {
      textColor_level1: "#5893c4", // blue
      textColor_level2: "#91a187", // green
    },
    navBar: {
      backgroundColor_ActiveHover: "#474747",
      backgroundColorNavigation: "rgb(61 61 61)",
    },
  },
};
