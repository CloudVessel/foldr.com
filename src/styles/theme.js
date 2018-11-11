import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#44475a',
      secondary: '#6272a4',
    },
    secondary: {
      main: '#ff5555',
    },
    tertiary: {
      main: '#ffb86c',
    },
    foreground: {
      main: '#F5F7F9',
      secondary: '#fafafa',
    },
    grey: {
      main: '#5C6975',
    },
  },
  shadow: {
    box: {
      main: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
    },
  },
});
