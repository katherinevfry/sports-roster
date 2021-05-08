import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import PageTwo from '../views/PageTwo';

// add Redirect to route if using private route

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route
        exact
        path='/'
        component={Home}
        />
        <Route
        exact
        patch='/page-two'
        component={PageTwo}
        />
      </Switch>
    </div>
  );
}
