import React from 'react';

const Header = ({ title }) => (
  <nav className="nav-wrapper blue-grey darken-4">
    <a href="/" className="brand-logo center">
      {title}
    </a>
  </nav>
);

export default Header;
