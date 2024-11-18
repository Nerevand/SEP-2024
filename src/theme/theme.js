import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: '"Baloo 2", sans-serif',
    body1: {
      fontFamily: '"Baloo 2", sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#000000",
    },
    h1: {
      fontFamily: '"Baloo", sans-serif',
      fontSize: 36,
      fontWeight: 400,
      lineHeight: 1.57,
      color: "#000000",
    },
    h2: {
      fontFamily: '"Baloo" 2, sans-serif',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.6,
      color: "#000000",
    },
    button: {
      fontFamily: '"Baloo" 2, sans-serif',
      fontSize: 16,
      fontWeight: 600,
      textTransform: "none",
    },
    copyright: {
      fontFamily: '"Baloo 2", sans-serif',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
