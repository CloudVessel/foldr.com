import React from 'react';
import { withStyles } from '@material-ui/core';

import Loading from '../Loading';
import Category from '../Category';

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

const mapCategoriesToLinks = () => (funcs = {}) =>
  (Object.keys(funcs).length
    ? Object.keys(funcs).map(func => (
      <Category
        text={func}
        innerText={funcs[func]}
        key={func}
        name={func}
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
