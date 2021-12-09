import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

const Header = function () {
  return (
    <header>
      <Link to="/"><h2>NOTFLIX</h2></Link>
      <AppBar />
      <ol><li>hi</li></ol>
    </header>
  );
};

export default Header;
