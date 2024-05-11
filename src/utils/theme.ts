import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
  fontFamily: '"IBM", monospace',
  sizes: {
    common: {
      gap: "5px",
      padding: "10px",
      lineHeight: "2.5ch",
      borderRadius: "5px",
      fontSize: "1.2rem",
      fontSizeAsFootnote: "0.8rem",
    },
    navBar: {
      height: "80px",
      gap: "5px",
    },
  },
  colors: {
    navBar: {
      backgroundColor_ActiveHover: "#474747",
      backgroundColorNavigation: "#3d3d3d",
    },
    common: {
      backgroundColor: "#383838", // dark gray
      backgroundColor_Hover: "#4c4c4c",
      backgroundColorAccent: "#3d3d3d",
      backgroundColorHighlight: "#b8610f", // orange
      backgroundColorHighlight_Hover: "#ff9100", // orange
      textColorMain: "#cecece",
      textColorSecond: "#e7e7e7",
      textColorThird: "#b8610f",
      borderColor: "#5c606d",
    },
  },
};
