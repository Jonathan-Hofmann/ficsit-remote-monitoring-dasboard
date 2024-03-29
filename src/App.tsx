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
import { ToggleTheme } from './components/toggleTheme';
import './App.css';
import { ConnectionCheckerProvider } from './context/connectionChecker';


function App() {
  
  return (
    <ThemeWrapper>
      <ToggleTheme>
        <BrowserRouter>
          <MainWrapper/>
        </BrowserRouter>
      </ToggleTheme>
    </ThemeWrapper>
  );
}

export default App;