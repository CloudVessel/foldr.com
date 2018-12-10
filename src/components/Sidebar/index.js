import React from 'react';
import PropTypes from 'prop-types';
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

const mapCategoriesToLinks = ({ onSelectedFunction, isSearching, selectedFunction }) =>
  (funcs = {}) => (Object.keys(funcs).length
    ? Object.keys(funcs).map(func => (
      <Category
        key={`${func}-${isSearching}`} // this ensures a new paint on every category mount
        text={func}
        name={func}
        functions={funcs[func]}
        isSearching={isSearching}
        onSelectedFunction={onSelectedFunction}
        selectedFunction={selectedFunction}
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

Sidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isLoadingDocs: PropTypes.bool.isRequired,
  funcs: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Sidebar);
