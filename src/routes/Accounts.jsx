import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Accounts = () => (
  <>
    <h1>Accounts</h1>
    <Nav />
    <Outlet />
  </>
);

export default Accounts;
