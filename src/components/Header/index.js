import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Search from '../Search';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.foreground.secondary,
    color: theme.palette.grey.main,
    boxShadow: theme.shadow.box.main,
    zIndex: 999,
    padding: '10px 0px',
    maxHeight: 60,
    height: 60,
    position: 'fixed',
    left: 0,
    right: 0,
  },
  title: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
    fontSize: 40,
  },
  mainContent: {
    height: '100%',
    width: 'calc(100% - 300px)',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
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
});

const Header = (props) => {
  const { classes, onFunctionSearch } = props;

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        foldr
      </div>
      <div className={classes.mainContent}>
        <div className={classes.search}>
          <Search onFunctionSearch={onFunctionSearch} />
        </div>
        <div className={classes.icons}>
          <span className={classes.icon}>Github</span>
          <span className={classes.icon}>Slack</span>
          <span className={classes.icon}>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
