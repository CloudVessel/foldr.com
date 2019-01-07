import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withLazyLoad from './components/HOC/withLazyLoad';

const Docs = withLazyLoad(() => import('./pages/Docs'));
// const NotFound = withLazyLoad(() => import('./pages/NotFound'));

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Docs />} />
    <Route path="/:version" render={() => <Docs />} />
    <Route path="/:version/:name" render={() => <Docs />} />
    <Redirect exact to="/" />
  </Switch>
);

export default Router;
