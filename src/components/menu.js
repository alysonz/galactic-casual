import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  }}>
    <Link
      to="/"
      style={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      Home
    </Link>
    <Link
      to="/profile"
      style={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      Profile
    </Link>
    <Link
      to="/contact"
      style={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      Contact
    </Link>
  </div>
);

export default Menu;
