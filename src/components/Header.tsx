import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

const Header = function () {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Link color="inherit" underline="hover" href="/">NOTFLIX</Link>
            <Button color="inherit" href="my-list">My List</Button>
            <Button color="inherit" href="new">New And Popular</Button>
            <Button color="inherit" href="auth">Sign up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
