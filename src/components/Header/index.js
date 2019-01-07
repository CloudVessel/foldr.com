import React from 'react';
import Select from 'react-select';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import Search from '../Search';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.foreground.secondary,
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
    justifyContent: 'center',
    color: theme.palette.text.tertiary,
    background: theme.palette.secondary.main,
  },
  titleText: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 40,
  },
  version: {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    marginLeft: 20,
    color: theme.palette.text.tertiary,
    cursor: 'pointer',
    outline: 'none',
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
    flex: 4,
  },
  icons: {
    flex: 1,
    justifySelf: 'end',
    paddingRight: 10,
  },
  icon: {
    padding: '0px 20px',
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
    paddingBottom: 5,
  },
  select: {
    color: theme.palette.grey.main,
    position: 'absolute !important',
    right: 15,
    bottom: 22,
    width: 125,
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
    const { classes, onFunctionSearch } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Link to="/" className={classes.titleText}>foldr</Link>
          <button
            onClick={this.handleToggleVersionSelect}
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
          <div className={classes.search}>
            <Search onFunctionSearch={onFunctionSearch} />
          </div>
          <div className={classes.icons}>
            <span className={classes.icon}>
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/CloudVessel/foldr.com"
              >
                GitHub
              </a>
            </span>
            <span className={classes.icon}>Slack</span>
            <span className={classes.icon}>Twitter</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
