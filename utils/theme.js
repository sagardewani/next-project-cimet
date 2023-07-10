import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
import typography from './typography';

const ThemeConfig = ({ children }) => {
  const themeOptions = React.useMemo(
    () => ({
      palette: {
        primary: {
          main: '#1b2a74',
        },
      },
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};


export default ThemeConfig;