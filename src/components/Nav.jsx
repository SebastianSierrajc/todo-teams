import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">Landing</Link>
    {' '}
    |
    {' '}
    <Link to="/about">About</Link>
    {' '}
    |
    {' '}
    <Link to="/accounts/register">Register</Link>
    {' '}
    |
    {' '}
    <Link to="/accounts/login">Login</Link>
    {' '}
    |
    {' '}
    <Link to="/accounts">Accounts</Link>
  </nav>
);

export default Nav;
