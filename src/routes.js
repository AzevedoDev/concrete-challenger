import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './context/User';

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <User>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/users/" component={Profile} />
        </Switch>
      </BrowserRouter>
    </User>
  );
}
