"use client";
import { Urbanist, Open_Sans } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const urban = Urbanist({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin"] });

let theme = createTheme({
  palette: {
    primary: {
      main: "#e26d5c",
    },
    secondary: {
      main: "rgb(74, 78, 105)",
    },
  },
  typography: {
    h1: {
      fontFamily: urban.style.fontFamily,
      fontWeight: 100,
    },
    h2: {
      fontFamily: urban.style.fontFamily,
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontFamily: open.style.fontFamily,
      fontWeight: 500,
    },
    body1: {
      fontFamily: open.style.fontFamily,
      fontWeight: 500,
    },
    button: {
      textTransform: "capitalize",
    },
    name: {
      fontFamily: open.style.fontFamily,
      fontSize: "2rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          name: "h1",
        },
      },
    },
  },
});

export const reponsiveTheme = responsiveFontSizes(theme);
