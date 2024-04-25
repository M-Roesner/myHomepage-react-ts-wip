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
      backgroundColorAccent: "#3d3d3d",
      textColor: "#f3f3f3",
      textColorSecond: "#b8610f",
      backgroundHoverColor: "#474747",
      borderColor: "#5c606d",
    },
  },
};
