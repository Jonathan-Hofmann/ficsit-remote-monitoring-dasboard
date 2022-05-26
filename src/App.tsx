import { Button, CssBaseline, Typography } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainWrapper } from './components/mainWrapper';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ecc52f',
    },
    secondary: {
      main: '#000000',
    },
    success:{
      main: '#009432'
    }
  },
  components:{
    MuiPaper:{
      styleOverrides:{
        root:{
          borderRadius: '10px'
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius: '6px',
          fontWeight: '600'
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <MainWrapper/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;