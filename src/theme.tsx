import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#0000FF",
    },
    background: {
      default: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
