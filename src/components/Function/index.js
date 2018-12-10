import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    transition: 'background-color .1s ease',
    display: 'flex',
    padding: 10,
    minHeight: 30,
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.main,
    border: 'none',
    width: '100%',
    borderLeft: `1px solid ${theme.palette.foreground.secondary}`,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.hovers[0],
    },
  },
  rootSelected: {
    transition: 'background-color .1s ease',
    display: 'flex',
    padding: 10,
    minHeight: 30,
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.main,
    border: 'none',
    width: '100%',
    borderLeft: `1px solid ${theme.palette.foreground.secondary}`,
    backgroundColor: theme.hovers[0],
  },
});

const FunctionName = (props) => {
  const {
    classes,
    name,
    onSelectedFunction,
    func,
    selectedFunction,
  } = props;

  const isCurrentlySelected = selectedFunction && name === selectedFunction.name;

  return (
    <div>
      <button
        type="submit"
        onClick={onSelectedFunction(func)}
        tabIndex={0}
        className={isCurrentlySelected ? classes.rootSelected : classes.root}
        onClick={onSelectedFunction(func)}
        tabIndex={0}
        className={classes.root}
      >
        {name}
      </button>
    </div>
  );
};

FunctionName.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  onSelectedFunction: PropTypes.func.isRequired,
  func: PropTypes.shape({}).isRequired,
  selectedFunction: PropTypes.shape({}),
};

FunctionName.defaultProps = {
  selectedFunction: {},
};

export default withStyles(styles)(FunctionName);
