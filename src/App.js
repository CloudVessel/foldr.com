import React from 'react';
import { hot } from 'react-hot-loader';

import Router from './Router';

const App = () => (
  <div>
    <Router />
  </div>
);

export default process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App;
