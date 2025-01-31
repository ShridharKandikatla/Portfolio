import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3436',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export {lightTheme, darkTheme}