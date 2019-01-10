import React from 'react';
import { ThemeContext } from '../../ThemeProvider';

export const withThemeSwitch = ComposedComponent => props => (
  <ThemeContext.Consumer>
    {values => <ComposedComponent {...props} {...values} />}
  </ThemeContext.Consumer>
);

export default withThemeSwitch;
