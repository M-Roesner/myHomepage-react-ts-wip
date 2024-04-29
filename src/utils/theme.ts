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
    common: {
      backgroundColor: "#383838",
      backgroundColor_Hover: "#474747",
      backgroundColorAccent: "#3d3d3d",
      backgroundColorHighlight: "#b8610f",
      backgroundColorHighlight_Hover: "#ff9100",
      textColorMain: "#cecece",
      textColorSecond: "#e7e7e7",
      textColorThird: "#b8610f",
      borderColor: "#5c606d",
    },
  },
};
