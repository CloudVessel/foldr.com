import React from 'react';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    outline: 'none',
    border: 'none',
    color: theme.palette.grey.tertiary,
    paddingLeft: 10,
    '&::placeholder': {
      color: theme.palette.grey.tertiary,
    },
  },
  icon: {
    marginLeft: 25,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  clear: {
    color: theme.palette.grey.tertiary,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
});

/**
 * 
 */
class SearchComponent extends React.Component {
  static propTypes = {
    onFunctionSearch: PropTypes.func.isRequired,
  }

  state = { term: '' };

  handleInputChange = ({ target }) => {
    const { value: term } = target;
    const { onFunctionSearch } = this.props;

    onFunctionSearch(term);

    this.setState({
      term,
    });
  }

  handleClearInput = () => {
    const { onFunctionSearch } = this.props;

    onFunctionSearch('');

    this.setState({
      term: '',
    });
  }

  handleSearchSubmit = ({ preventDefault }) => {
    preventDefault();
  }

  /**
   * 
   */
  render() {
    const { term } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Search className={classes.icon} />
        <form className={classes.form} onSubmit={this.handleSearchSubmit}>
          <input
            value={term}
            onChange={this.handleInputChange}
            placeholder="Search.."
            className={classes.input}
          />
          {term.length ? (
            <button
              type="submit"
              tabIndex={0}
              className={classes.clear}
              onClick={this.handleClearInput}
            >
              <Close />
            </button>
          ) : null}
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SearchComponent);
