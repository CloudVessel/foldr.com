import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withLazyLoad from './components/HOC/withLazyLoad';

const Docs = withLazyLoad(() => import('./pages/Docs'));
const NotFound = withLazyLoad(() => import('./pages/NotFound'));

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Docs />} />
    <Route exact path="/foo" render={() => <Docs />} />
    <Route exact path="/:version/:name" render={() => <Docs />} />
  </Switch>
);

export default Router;
