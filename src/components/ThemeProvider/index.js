import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { light, dark } from '../../styles/theme';

export const ThemeContext = React.createContext();

/**
 * Theme Switching React Context Provider/ renderer
 * @returns {React.Component} - ThemeProvider
 */
class ThemeProvider extends React.Component {
  state = {
    theme: light,
    /* eslint-disable-next-line */
    isLight: true,
  }

  /**
   * Getter for the theme
   * @returns {Object} - MUI theme
   */
  get theme() {
    const { theme } = this.state;

    return createMuiTheme(theme);
  }

  handleThemeToggle = () => {
    const { isLight } = this.state;

    this.setState({
      theme: isLight ? light : dark,
    });
  }

  handleThemeSwitch = () => this.setState(({ isLight }) => ({
    isLight: !isLight,
  }), this.handleThemeToggle);

  /** @inheritDoc */
  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Provider value={{
        onThemeSwitch: this.handleThemeSwitch,
      }}
      >
        <MuiThemeProvider theme={this.theme}>
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
