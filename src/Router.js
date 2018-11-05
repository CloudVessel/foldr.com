import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Docs,
  Home,
} from './pages';

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/docs" component={Docs} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
