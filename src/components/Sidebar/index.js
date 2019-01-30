import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    height: 'calc(100vh - 125px)',
    backgroundColor: theme.palette.foreground.main,
    zIndex: 99,
    width: 300,
    padding: '25px 0 25px 0',
  },
  title: {
    color: theme.palette.grey.main,
    textTransform: 'uppercase',
    fontWeight: 500,
    paddingLeft: 25,
    margin: '20px 0 15px 0',
  },
  links: {
    padding: '0 0 0 28px',
    marginBottom: 40,
    marginTop: 20,
  },
  link: {
    display: 'block',
    margin: '20px 0',
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
      <div>
        <h4 className={classes.title}>Getting Started</h4>
        <ul className={classes.links}>
          <Link className={classes.link} to="/">Why Foldr?</Link>
          <Link className={classes.link} to="/">Installation</Link>
          <Link className={classes.link} to="/">Further Reading</Link>
        </ul>
        <h4 className={classes.title}>Api Docs</h4>
        {
          isLoadingDocs
            ? <Loading />
            : mappedCategoriesWithProps(funcs)
        }
        <h4 className={classes.title}>GitHub</h4>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isLoadingDocs: PropTypes.bool.isRequired,
  funcs: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Sidebar);
