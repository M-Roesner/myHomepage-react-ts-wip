import { DefaultTheme } from "styled-components";
export const defaultTheme: DefaultTheme = {
  fontFamily: '"IBM", monospace',
  sizes: {
    common: { gap: "5px", padding: "10px" },
    navBar: {
      height: "80px",
      gap: "5px",
    },
  },
  palette: {
    common: {
      backgroundColor: "#383838",
      backgroundColor_Hover: "#474747",
      backgroundColorAccent: "#3d3d3d",
      backgroundColorHighlight: "#b8610f",
      backgroundColorHighlight_Hover: "#ff9100",
      textColor: "#f3f3f3",
      textColorSecond: "#b8610f",
      borderColor: "#5c606d",
    },
  },
};
