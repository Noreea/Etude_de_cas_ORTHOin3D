import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4180b8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
});

function AppTitle() {
  return (
    <ThemeProvider theme={theme}>
      <MuiAppBar position="static" color="primary" elevation={4} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Enregistrements
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </ThemeProvider>
  );
}

export default AppTitle;
