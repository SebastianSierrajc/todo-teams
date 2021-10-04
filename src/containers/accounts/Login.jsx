import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h1>Login</h1>
    <nav>
      <Link to="../register">Don&apos;t have an account?</Link>
      {' '}
      |
      {' '}
      <Link to="../resetPassword">Forgot Password?</Link>
    </nav>
  </div>
);

export default Login;
