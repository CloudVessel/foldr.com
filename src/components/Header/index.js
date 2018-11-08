import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.foreground.main,
    color: theme.palette.grey.main,
    padding: '0px 24px',
    height: 80,
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      This is the header
    </div>
  );
};

export default withStyles(styles)(Header);
