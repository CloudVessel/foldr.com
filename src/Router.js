import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import withLazyLoad from './components/HOC/withLazyLoad';

const Home = withLazyLoad(() => import('./pages/Home'));
const Docs = withLazyLoad(() => import('./pages/Docs'));
const NotFound = withLazyLoad(() => import('./pages/NotFound'));

const Router = () => (
  <Switch>
    <Route exact path="/foo" component={Home} />
    <Route path="/" component={Docs} />
    <Route path="/docs/:version" component={Docs} />
    <Route component={NotFound} />
    <Redirect to="/" />
  </Switch>
);

export default Router;
