import { Button, CssBaseline, Typography } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainWrapper } from './components/mainWrapper';
import { deepmerge } from '@mui/utils';
import {
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import { CssVarsProvider, extendTheme as extendJoyTheme, useColorScheme } from '@mui/joy/styles';
import { ModeToggle } from './components/toggle';
import { ThemeWrapper } from './components/themeWrapper';
import { SettingsProvider } from './context/Settings';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ecc52f',
      light: '#f2d76d',
      dark: '#d4b22a',
      contrastText: '#000000',
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
  
  // Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)`
  // because some of the values in the Joy UI theme refers to CSS variables and
  // not raw colors.
  const muiTheme = extendMuiTheme(darkTheme);

  const joyTheme = extendJoyTheme({
    // This is required to point to `var(--mui-*)` because we are using
    // `CssVarsProvider` from Material UI.
    cssVarPrefix: 'mui',
    colorSchemes: {
      light: {
        palette: {
          primary: {
            solidColor: 'var(--mui-palette-primary-contrastText)',
            solidBg: 'var(--mui-palette-primary-main)',
            solidHoverBg: 'var(--mui-palette-primary-dark)',
            plainColor: 'var(--mui-palette-primary-main)',
            plainHoverBg:
              'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
            plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
            outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
            outlinedColor: 'var(--mui-palette-primary-main)',
            outlinedHoverBg:
              'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
            outlinedHoverBorder: 'var(--mui-palette-primary-main)',
            outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          },
          // neutral: {
          //   ...grey,
          // },
          // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
          divider: 'var(--mui-palette-divider)',
          text: {
            tertiary: 'rgba(0 0 0 / 0.56)',
          },
        },
      },
    },
    fontFamily: {
      display: '"Roboto","Helvetica","Arial",sans-serif',
      body: '"Roboto","Helvetica","Arial",sans-serif',
    },
    // shadow: {
    //   xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    //   sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    //   md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    //   lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    //   xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
    // },
  });
  
  // You can use your own `deepmerge` function.
  // muiTheme will deeply merge to joyTheme.
  const theme = deepmerge(joyTheme, muiTheme);

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline enableColorScheme />
      
    // </ThemeProvider>
    // <CssVarsProvider theme={theme}>
    //   <ModeToggle/>
    // </CssVarsProvider>
    <ThemeWrapper>
      <SettingsProvider>
        <BrowserRouter>
          <MainWrapper/>
        </BrowserRouter>
      </SettingsProvider>
    </ThemeWrapper>
  );
}

export default App;