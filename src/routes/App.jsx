import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Landing from '../containers/Landing';
import About from '../containers/About';
import Accounts from './Accounts';
import Login from '../containers/accounts/Login';
import Register from '../containers/accounts/Register';
import ResetPassword from '../containers/accounts/ResetPassword';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="" element={<Landing />} />
      </Route>
      <Route path="accounts" element={<Accounts />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
