import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.foreground.secondary,
    color: theme.palette.grey.main,
    boxShadow: theme.shadow.box.main,
    zIndex: 999,
    padding: '10px 0px',
    height: 80,
    position: 'fixed',
    left: 0,
    right: 0,
  },
  title: {
    width: 360,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
    fontSize: 50,
    paddingTop: 10,
  },
  mainContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
  },
  search: {
    flex: 4,
    paddingLeft: 10,
  },
  icons: {
    flex: 1,
    justifySelf: 'end',
  },
  icon: {
    padding: '0px 20px',
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        foldr
      </div>
      <div className={classes.mainContent}>
        <div className={classes.search}>
          search
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
