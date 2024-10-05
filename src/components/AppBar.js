import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const AppBarComponent = ({ toggleTheme, mode }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          BankApp
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;