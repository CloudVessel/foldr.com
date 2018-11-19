import React from 'react';
import { withStyles } from '@material-ui/core';

import Loading from '../Loading';
import FuncItem from '../FuncItem';

const styles = theme => ({
  root: {
    marginTop: 87.5,
    overflow: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    backgroundColor: theme.palette.foreground.main,
    zIndex: 99,
    width: 300,
  },
});

const mapfunctionsToLinks = funcs =>
  (funcs && funcs.length ? funcs.map(func => <FuncItem name={func} />) : []);

const Sidebar = (props) => {
  const { classes, isLoadingDocs, funcs } = props;

  return (
    <div className={classes.root}>
      This is the sidebar
      {
        isLoadingDocs
          ? <Loading />
          : mapfunctionsToLinks(funcs)
      }
    </div>
  );
};

export default withStyles(styles)(Sidebar);
