import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Root from './App';
import './styles/main.css';
import theme from './styles/theme';

ReactDom.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
