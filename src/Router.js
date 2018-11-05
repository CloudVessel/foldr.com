import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Docs from './pages/docs';
import Home from './pages/home';

const Router = (props) => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
