import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Inicial from './pages/Inicial';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/inicial" exact component={Inicial} />
    </Switch>
  );
}