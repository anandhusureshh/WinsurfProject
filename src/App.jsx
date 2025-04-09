import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CssBaseline from '@mui/material/CssBaseline';
import IncentivesConfigurator from './components/IncentivesConfigurator';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto Flex", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 500,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto Flex", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto Flex", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <IncentivesConfigurator />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
