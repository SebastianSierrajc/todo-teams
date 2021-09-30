import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Landing from '../containers/Landing';

const App = () => (
  <Router>
    <Auth />
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default App;
