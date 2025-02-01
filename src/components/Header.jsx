import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Landscaping Co.
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;
