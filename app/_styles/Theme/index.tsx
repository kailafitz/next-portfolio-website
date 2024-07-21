"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { urban, open } from "../Fonts";
import { light, primary, secondary } from "../Palette";

const defaultTheme = createTheme();

let theme = createTheme({
  palette: {
    primary: {
      main: primary.main,
      dark: primary.dark,
    },
    secondary: {
      main: secondary.main,
      dark: secondary.dark,
    },
    light: {
      main: light.main,
      dark: light.dark,
    },
  },
  typography: {
    h1: {
      fontFamily: urban.style.fontFamily,
      fontWeight: 600,
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
    h4: {
      color: secondary.main,
      fontWeight: 600,
    },
    h5: {
      fontFamily: urban.style.fontFamily,
    },
    h6: {
      fontFamily: urban.style.fontFamily,
    },
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
      fontSize: "0.7rem",
      color: light.main,
      fontFamily: open.style.fontFamily,
    },
    externalLinkHeading: {
      color: secondary.main,
      fontFamily: open.style.fontFamily,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up("xs")]: {
            // paddingTop: defaultTheme.spacing(16),
            // paddingBottom: defaultTheme.spacing(16),
            paddingRight: defaultTheme.spacing(2.3),
            paddingLeft: defaultTheme.spacing(2.3),
          },
          [defaultTheme.breakpoints.up("md")]: {
            // paddingTop: defaultTheme.spacing(8),
            // paddingBottom: defaultTheme.spacing(8),
            paddingRight: defaultTheme.spacing(5),
            paddingLeft: defaultTheme.spacing(5),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: { minWidth: "unset", fontSize: "1.2rem" },
      },
      variants: [
        {
          props: { variant: "inset", color: "primary" },
          style: {
            color: light.main,
            boxShadow: `0px 0px 0px ${primary.dark},
                        0px 0px 0px ${primary.light},
                        inset 5px 5px 10px ${primary.dark},
                        inset -5px -5px 5px ${primary.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${primary.dark},
                          -1px -1px 10px ${primary.light},
                          inset 0px 0px 0px ${primary.dark},
                          inset 0px 0px 0px ${primary.light}`,
              opacity: 1,
              backgroundColor: primary.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
        {
          props: { variant: "inset", color: "secondary" },
          style: {
            color: light.main,
            boxShadow: `0px 0px 0px ${secondary.dark},
                        0px 0px 0px ${secondary.light},
                        inset 5px 5px 10px ${secondary.dark},
                        inset -5px -5px 5px ${secondary.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${secondary.dark},
                          -1px -1px 10px ${secondary.light},
                          inset 0px 0px 0px ${secondary.dark},
                          inset 0px 0px 0px ${secondary.light}`,
              opacity: 1,
              backgroundColor: secondary.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
        {
          props: { variant: "inset", color: "light" },
          style: {
            color: secondary.main,
            boxShadow: `0px 0px 0px ${light.dark},
                        0px 0px 0px ${light.light},
                        inset 5px 5px 10px ${light.dark},
                        inset -5px -5px 5px ${light.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              boxShadow: `3px 4px 8px ${light.dark},
                          -1px -1px 10px ${light.light},
                          inset 0px 0px 0px ${light.dark},
                          inset 0px 0px 0px ${light.light}`,
              opacity: 1,
              backgroundColor: light.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
      ],
    },
    MuiInput: {
      variants: [
        {
          props: {
            color: "light",
          },
          style: {
            color: light.main,
            "&::before": {
              borderBottom: `2px solid ${light.main}`,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: `2px solid ${light.main}`,
            },
            "&.Mui-focused:after": {
              borderBottom: `2px solid ${primary.main}`,
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
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: defaultTheme.spacing(0.5),
          [defaultTheme.breakpoints.up("xs")]: {
            fontSize: "1.5rem",
          },
          "&:not(.Mui-selected)": {
            color: "#4a4e699c",
            boxShadow: `0px 0px 0px ${light.dark},
                        0px 0px 0px ${light.light},
                        inset 5px 5px 10px ${light.dark},
                        inset -5px -5px 5px ${light.light}`,
            transition: "box-shadow .2s ease-in",
            "&:hover": {
              color: secondary.main,
              boxShadow: `3px 4px 8px ${light.dark},
                          -1px -1px 10px ${light.light},
                          inset 0px 0px 0px ${light.dark},
                          inset 0px 0px 0px ${light.light}`,
              opacity: 1,
              backgroundColor: light.main,
              transition: "box-shadow .2 ease-in",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
        flexContainer: {
          padding: defaultTheme.spacing(1),
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: {
            color: "light",
          },
          style: {
            "& label": {
              color: light.main,
            },
            "& label.Mui-focused": {
              color: light.main,
            },
          },
        },
      ],
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          name: "h1",
          copyright: "p",
        },
      },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            [defaultTheme.breakpoints.up("xs")]: {
              fontSize: "2.3rem",
            },
            [defaultTheme.breakpoints.up("sm")]: {
              fontSize: "3rem",
            },
            [defaultTheme.breakpoints.up("md")]: {
              fontSize: "3.3rem",
            },
            [defaultTheme.breakpoints.up("lg")]: {
              fontSize: "4rem",
            },
          },
        },
        {
          props: { variant: "h2" },
          style: {
            textAlign: "left",
            [defaultTheme.breakpoints.up("xs")]: {
              paddingBottom: defaultTheme.spacing(8),
            },
            [defaultTheme.breakpoints.up("md")]: {
              paddingBottom: defaultTheme.spacing(16),
            },
          },
        },
        {
          props: { variant: "externalLinkHeading" },
          style: {
            color: secondary.main,
            fontWeight: 600,
            textDecoration: "none",
            textShadow: "3px 5px 3px #0000002b",
            transition: "text-shadow .6s ease",
            svg: {
              transform: "scale(1)",
              paddingLeft: defaultTheme.spacing(0.3),
              marginBottom: 0,
              transition: "all .3s ease-in",
            },
            "&:hover": {
              textShadow: "0px 0px 0px #0000002b",
              transition: "text-shadow .6s ease",
              svg: {
                transform: "scale(1.6)",
                paddingLeft: defaultTheme.spacing(0.8),
                marginBottom: defaultTheme.spacing(0.8),
                transition: "all .3s ease-in",
              },
            },
          },
        },
      ],
    },
  },
});

export const reponsiveTheme = responsiveFontSizes(theme);
