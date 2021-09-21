import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#0073D1",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff0000",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    h6: {
      fontSize: "1.1rem",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
});

const vemoTheme = responsiveFontSizes(theme);
export default vemoTheme;
