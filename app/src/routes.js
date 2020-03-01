import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';
import Departments from './pages/Departments';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/users" exact component={Users} />
      <Route path="/departments" exact component={Departments} />
    </Switch>
  );
}