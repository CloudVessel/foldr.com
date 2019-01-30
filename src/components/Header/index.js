import React from 'react';
import Select from 'react-select';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IntertColors from '@material-ui/icons/InvertColors';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import Search from '../Search';
import withThemeSwitch from '../HOC/withThemeSwitch';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey.main,
    boxShadow: theme.shadow.box.main,
    zIndex: 999,
    height: 80,
    maxHeight: 80,
    position: 'fixed',
    left: 0,
    right: 0,
  },
  title: {
    position: 'relative',
    height: '100%',
    width: 300,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.main,
    background: theme.palette.secondary.main,
  },
  titleText: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 28,
    marginLeft: 35,
  },
  version: {
    background: theme.palette.primary.main,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: 15,
    marginLeft: 30,
    color: theme.palette.text.tertiary,
    cursor: 'pointer',
    outline: 'none',
    borderRadius: 10,
    padding: '3px 13px',
  },
  mainContent: {
    height: '100%',
    width: 'calc(100% - 300px)',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.text.tertiary,
  },
  search: {
    flex: 3,
    paddingRight: 40,
  },
  icons: {
    flex: 2,
    justifySelf: 'end',
    padding: '0 25px',
  },
  icon: {
    color: theme.palette.grey.main,
    padding: '0px 25px',
    textTransform: 'uppercase',
    fontWeight: 400,
  },
  link: {
    paddingBottom: 5,
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  arrowDown: {
    paddingLeft: 5,
  },
  select: {
    color: theme.palette.grey.main,
    position: 'absolute !important',
    right: 15,
    bottom: 22,
    width: 125,
  },
  themeSwitch: {
    color: theme.palette.grey.main,
    height: '100%',
    padding: '10px 30px',
    background: 'transparent',
    borderTop: 'none',
    borderBottom: 'none',
    cursor: 'pointer',
  },
});

/**
 *
 */
class Header extends React.Component {
  anchorRef = null;

  state = {
    isVersionSelectOpen: false,
    selectedVersion: { label: '1.0.0', value: '1.0.0' },
  };

  handleToggleVersionSelect = () =>
    this.setState(({ isVersionSelectOpen }) => ({
      isVersionSelectOpen: !isVersionSelectOpen,
    }));

  handleHistoryChange = () => {
    const { selectedVersion } = this.state;
    const { history } = this.props;

    history.push(selectedVersion.value);
  }

  handleVersionSelectChange = selectedVersion =>
    this.setState(({ isVersionSelectOpen }) => ({
      selectedVersion,
      isVersionSelectOpen: !isVersionSelectOpen,
    }), this.handleHistoryChange);

  /**
   * @inheritDoc
   */
  render() {
    const { isVersionSelectOpen, selectedVersion } = this.state;
    const { classes, onFunctionSearch, onThemeSwitch } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Link to="/" className={classes.titleText}>foldr</Link>
          <button
            // @TODO: uncomment when anything above v1.0.0 is released
            // onClick={this.handleToggleVersionSelect}
            onKeyPress={this.handleToggleVersionSelect}
            ref={this.anchorRef}
            type="button"
            className={classes.version}
          >
            {selectedVersion.label}
            <ArrowDropDown className={classes.arrowDown} />
          </button>
          {isVersionSelectOpen && (
            <Select
              value={selectedVersion}
              onChange={this.handleVersionSelectChange}
              className={classes.select}
              options={[{ label: '1.0.0', value: '1.0.0' }, { label: '2.0.0', value: '2.0.0' }]}
            />
          )}
        </div>
        <div className={classes.mainContent}>
          <div className={classes.icons}>
            <span className={classes.icon}>
              <Link
                className={classes.link}
                to="/"
              >
                Getting Started
              </Link>
            </span>
            <span className={classes.icon}>Api Docs</span>
            <span className={classes.icon}>GitHub</span>
          </div>
          <div className={classes.search}>
            <Search onFunctionSearch={onFunctionSearch} />
          </div>
          <button
            type="button"
            className={classes.themeSwitch}
            onClick={onThemeSwitch}
          >
            <IntertColors />
          </button>
        </div>
      </div>
    );
  }
}

export default withThemeSwitch(withRouter(withStyles(styles)(Header)));
