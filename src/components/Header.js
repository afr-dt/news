import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <nav className="nav-wrapper blue-grey darken-4">
    <a href="/" className="brand-logo center">
      {title}
    </a>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
