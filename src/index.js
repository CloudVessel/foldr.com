import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';

import Root from './App';
import './styles/main.css';

ReactDom.render(
  <BrowserRouter>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
