import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EE', // Deep Purple
    },
    secondary: {
      main: '#03DAC6', // Teal
    },
    background: {
      default: '#F5F5F5', // Light Gray
    },
    text: {
      primary: '#212121', // Dark Gray
    },
    error: {
      main: '#B00020', // Red for errors
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);