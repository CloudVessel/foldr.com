import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.code.main,
    padding: '10px 0',
    borderRadius: 3,
  },
  input: {
    border: 'none',
    outline: 'none',
    color: theme.palette.grey.tertiary,
    background: 'none',
    padding: '5px 25px',
    '&::placeholder': {
      color: theme.palette.grey.tertiary,
    },
    width: '100%',
  },
  icon: {
    marginLeft: 25,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  clear: {
    color: theme.palette.grey.tertiary,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
  },
  isFocused: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

/**
 * 
 */
class SearchComponent extends React.Component {
  static propTypes = {
    onFunctionSearch: PropTypes.func.isRequired,
  }

  state = {
    term: '',
    isFocused: false,
  };

  handleInputChange = ({ target }) => {
    const { value: term } = target;
    const { onFunctionSearch } = this.props;

    onFunctionSearch(term);

    this.setState({
      term,
    });
  }

  handleClearInput = () => {
    this.handleRemoveIsFocused();

    const { onFunctionSearch } = this.props;

    onFunctionSearch('');

    this.setState({
      term: '',
    });
  }

  handleSearchSubmit = ({ preventDefault }) => {
    preventDefault();
  }

  handleSetIsFocused = () => this.setState({ isFocused: true });

  handleRemoveIsFocused = () => this.setState({ isFocused: false });

  /**
   * 
   */
  render() {
    const { term, isFocused } = this.state;
    const { classes } = this.props;

    console.log('here', isFocused);

    return (
      <div className={cn(classes.root, {
        [classes.isFocused]: isFocused,
      })}
      >
        <Search className={classes.icon} />
        <form className={classes.form} onSubmit={this.handleSearchSubmit}>
          <input
            value={term}
            onClick={this.handleSetIsFocused}
            onBlur={this.handleRemoveIsFocused}
            onChange={this.handleInputChange}
            placeholder="Search docs..."
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
