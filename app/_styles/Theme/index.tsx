"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { display, sans } from "../Fonts";
import { light, primary, secondary } from "../Palette";

const defaultTheme = createTheme();

let theme = createTheme({
  palette: {
    background: {
      default: light.main,
      paper: light.light,
    },
    text: {
      primary: secondary.main,
      secondary: secondary.light,
    },
    primary: {
      main: primary.main,
      light: primary.light,
      dark: primary.dark,
    },
    secondary: {
      main: secondary.main,
      light: secondary.light,
      dark: secondary.dark,
    },
    light: {
      main: light.main,
      dark: light.dark,
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: sans.style.fontFamily,
    h1: {
      fontFamily: display.style.fontFamily,
      fontWeight: 500,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: display.style.fontFamily,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    h3: {
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: display.style.fontFamily,
      color: secondary.main,
      fontWeight: 500,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontFamily: display.style.fontFamily,
      fontWeight: 500,
    },
    h6: {
      fontFamily: sans.style.fontFamily,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 500,
    },
    body1: {
      fontFamily: sans.style.fontFamily,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: sans.style.fontFamily,
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
    },
    name: {
      fontFamily: display.style.fontFamily,
      fontSize: "1.7rem",
      fontWeight: 500,
    },
    copyright: {
      fontSize: "0.75rem",
      letterSpacing: "0.04em",
      color: light.main,
      fontFamily: sans.style.fontFamily,
    },
    externalLinkHeading: {
      color: primary.dark,
      fontFamily: display.style.fontFamily,
      fontStyle: "italic",
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: light.main,
          color: secondary.main,
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
        root: {
          minWidth: "unset",
          fontSize: "0.95rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          borderRadius: 999,
          textTransform: "none",
          boxShadow: "none",
        },
      },
      variants: [
        {
          props: { variant: "inset", color: "primary" },
          style: {
            color: light.light,
            backgroundColor: primary.main,
            border: `1px solid ${primary.main}`,
            padding: "10px 22px",
            "&:hover": {
              backgroundColor: primary.dark,
              borderColor: primary.dark,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "inset", color: "secondary" },
          style: {
            color: secondary.main,
            backgroundColor: light.light,
            border: `1px solid ${light.light}`,
            padding: "10px 22px",
            "&:hover": {
              backgroundColor: primary.light,
              borderColor: primary.light,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "inset", color: "light" },
          style: {
            color: secondary.main,
            backgroundColor: "transparent",
            border: `1px solid ${light.dark}`,
            padding: "10px 18px",
            "&:hover": {
              backgroundColor: primary.light,
              borderColor: primary.main,
              boxShadow: "none",
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
          fontFamily: sans.style.fontFamily,
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
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 500,
          minHeight: 44,
          [defaultTheme.breakpoints.up("xs")]: {
            fontSize: "1rem",
          },
          "&.Mui-selected": {
            color: primary.dark,
            backgroundColor: primary.light,
          },
          "&:not(.Mui-selected)": {
            color: secondary.light,
            backgroundColor: "transparent",
            "&:hover": {
              color: secondary.main,
              backgroundColor: "rgba(183, 110, 121, 0.08)",
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
        root: {
          backgroundColor: "rgba(255, 253, 251, 0.7)",
          border: `1px solid ${light.dark}`,
          borderRadius: 999,
          width: "fit-content",
          minHeight: 52,
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
              paddingBottom: defaultTheme.spacing(4),
            },
            [defaultTheme.breakpoints.up("md")]: {
              paddingBottom: defaultTheme.spacing(6),
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
