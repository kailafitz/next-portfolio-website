"use client";
import { Urbanist, Open_Sans } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { customPalettes } from "../../variables";

const urban = Urbanist({
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const open = Open_Sans({
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

let theme = createTheme({
  palette: {
    primary: {
      main: customPalettes.primary.main,
      dark: customPalettes.primary.dark,
    },
    secondary: {
      main: customPalettes.secondary.main,
      dark: customPalettes.secondary.dark,
    },
    white: {
      main: customPalettes.white.main,
      dark: customPalettes.white.dark,
    },
  },
  typography: {
    h1: {
      fontFamily: urban.style.fontFamily,
      fontWeight: 100,
      lineHeight: 1,
    },
    h2: {
      fontFamily: urban.style.fontFamily,
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: urban.style.fontFamily,
    },
    h6: {
      fontFamily: urban.style.fontFamily,
    },
    // subtitle1: {
    //   fontSize: "1.2rem",
    //   fontFamily: open.style.fontFamily,
    //   fontWeight: 500,
    // },
    body1: {
      fontFamily: open.style.fontFamily,
      lineHeight: 1.3,
    },
    button: {
      textTransform: "capitalize",
    },
    name: {
      fontFamily: open.style.fontFamily,
      fontSize: "2rem",
    },
    copyright: {
      fontSize: "0.875rem",
      color: customPalettes.white.main,
      fontFamily: open.style.fontFamily,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          name: "h1",
          body1: "p",
          copyright: "p",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: { minWidth: "unset", fontSize: "1.2rem" },
      },
      variants: [
        {
          props: { variant: "inset", color: "primary" },
          style: {
            color: customPalettes.white.main,
            boxShadow: `0px 0px 0px ${customPalettes.primary.dark},
                        0px 0px 0px ${customPalettes.primary.light},
                        inset 5px 5px 10px ${customPalettes.primary.dark},
                        inset -5px -5px 5px ${customPalettes.primary.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${customPalettes.primary.dark},
                          -1px -1px 10px ${customPalettes.primary.light},
                          inset 0px 0px 0px ${customPalettes.primary.dark},
                          inset 0px 0px 0px ${customPalettes.primary.light}`,
              opacity: 1,
              backgroundColor: customPalettes.primary.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
        {
          props: { variant: "inset", color: "secondary" },
          style: {
            color: customPalettes.white.main,
            boxShadow: `0px 0px 0px ${customPalettes.secondary.dark},
                        0px 0px 0px ${customPalettes.secondary.light},
                        inset 5px 5px 10px ${customPalettes.secondary.dark},
                        inset -5px -5px 5px ${customPalettes.secondary.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${customPalettes.secondary.dark},
                          -1px -1px 10px ${customPalettes.secondary.light},
                          inset 0px 0px 0px ${customPalettes.secondary.dark},
                          inset 0px 0px 0px ${customPalettes.secondary.light}`,
              opacity: 1,
              backgroundColor: customPalettes.secondary.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
        {
          props: { variant: "inset", color: "white" },
          style: {
            color: customPalettes.secondary.main,
            boxShadow: `0px 0px 0px ${customPalettes.white.dark},
                        0px 0px 0px ${customPalettes.white.light},
                        inset 5px 5px 10px ${customPalettes.white.dark},
                        inset -5px -5px 5px ${customPalettes.white.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${customPalettes.white.dark},
                          -1px -1px 10px ${customPalettes.white.light},
                          inset 0px 0px 0px ${customPalettes.white.dark},
                          inset 0px 0px 0px ${customPalettes.white.light}`,
              opacity: 1,
              backgroundColor: customPalettes.white.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontFamily: open.style.fontFamily,
          wordWrap: "break-word",
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: {
            color: "white",
          },
          style: {
            "& label": {
              color: customPalettes.white.main,
            },
            "& label.Mui-focused": {
              color: customPalettes.primary.main,
            },
          },
        },
      ],
    },
    MuiInput: {
      variants: [
        {
          props: {
            color: "white",
          },
          style: {
            color: customPalettes.white.main,
            "&::before": {
              borderBottom: `2px solid ${customPalettes.white.main}`,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: `2px solid ${customPalettes.white.main}`,
            },
            "&.Mui-focused:after": {
              borderBottom: `2px solid ${customPalettes.primary.main}`,
            },
          },
        },
      ],
    },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "h3.fontSize",
    //       "& .MuiButtonBase-root-MuiTab-root": { fontSize: "h4.fontSize" },
    //     },
    //   },
    // },
  },
});

export const reponsiveTheme = responsiveFontSizes(theme);
