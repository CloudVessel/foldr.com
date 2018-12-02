import { createMuiTheme } from '@material-ui/core/styles';

const overrides = {
  MuiInput: {
    input: {
      '&:hover:after': {
        backgroundColor: 'transparent',
        borderBottom: 'none',
      },
    },
  },
  MuiExpansionPanelSummary: {
    expandIcon: {
      color: '#8E8E8E !important',
    },
    expanded: {
      color: '#8E8E8E !important',
    },
  },
};

export default createMuiTheme({
  palette: {
    primary: {
      main: '#44475a',
      secondary: '#6272a4',
    },
    secondary: {
      main: '#52DE9E',
    },
    tertiary: {
      main: '#ffb86c',
    },
    foreground: {
      main: '#282a36',
      secondary: '#363842',
      tertiary: '#44475a',
    },
    grey: {
      main: '#5C6975',
      secondary: '#ddd',
      tertiary: '#999',
    },
    text: {
      main: '#8E8E8E',
      secondary: '#bd93f9',
      tertiary: '#fff',
    },
  },
  structural: {
    borderRadius: [2],
  },
  shadow: {
    box: {
      main: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
    },
  },
  hovers: ['rgba(54, 56, 66, .8)'],
  overrides,
});
