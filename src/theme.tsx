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
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "'Bungee', cursive",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "'Bungee', cursive",
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

theme = responsiveFontSizes(theme);
export default theme;
