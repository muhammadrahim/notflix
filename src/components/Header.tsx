import React from 'react';
import { Link } from 'react-router-dom';

const Header = function () {
  return (
    <header>
      <Link to="/"><h2>NOTFLIX</h2></Link>
      <ol><li>hi</li></ol>
    </header>
  );
};

export default Header;
