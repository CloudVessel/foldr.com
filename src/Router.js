import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withLazyLoad from './components/HOC/withLazyLoad';

const Docs = withLazyLoad(() => import('./pages/Docs'));
const NotFound = withLazyLoad(() => import('./pages/NotFound'));

const Router = () => (
  <Switch>
    <Route path="/" component={Docs} />
    <Route path="/:version" component={Docs} />
    <Route path="/:version/:name" component={Docs} />
  </Switch>
);

export default Router;
