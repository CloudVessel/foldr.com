import React from 'react';
import { withStyles } from '@material-ui/core';

import Loading from '../Loading';
import Category from '../Category';

const styles = theme => ({
  root: {
    marginTop: 80,
    overflow: 'auto',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 'calc(100vh - 80px)',
    backgroundColor: theme.palette.foreground.main,
    zIndex: 99,
    width: 300,
  },
});

const mapCategoriesToLinks = ({ onSelectedFunction }) => (funcs = {}) =>
  (Object.keys(funcs).length
    ? Object.keys(funcs).map(func => (
      <Category
        text={func}
        functions={funcs[func]}
        key={func}
        name={func}
        onSelectedFunction={onSelectedFunction}
      />
    ))
    : []
  );

const Sidebar = (props) => {
  const { classes, isLoadingDocs, funcs } = props;

  const mappedCategoriesWithProps = mapCategoriesToLinks(props);

  return (
    <div className={classes.root}>
      {
        isLoadingDocs
          ? <Loading />
          : mappedCategoriesWithProps(funcs)
      }
    </div>
  );
};

export default withStyles(styles)(Sidebar);
