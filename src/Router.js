import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Docs,
  Home,
  NotFound,
} from './pages';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="/docs/:version" component={Docs} />
    <Route component={NotFound} />
    <Redirect to="/" />
  </Switch>
);

export default Router;
