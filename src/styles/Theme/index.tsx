"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#e26d5c",
    },
    secondary: {
      main: "rgb(74, 78, 105)",
    },
  },
});

export const reponsiveTheme = responsiveFontSizes(theme);
