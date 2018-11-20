import React from 'react';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    borderLeft: '1px solid #ddd',
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
});

/**
 * 
 */
class SearchComponent extends React.Component {
  state = { term: '' };

  handleInputChange = ({ target }) => this.setState({
    term: target.value,
  });

  /**
   * 
   */
  render() {
    const { term } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Search className={classes.icon} />
        <form onSubmit={this.handleSearchSubmit}>
          <input
            value={term}
            onChange={this.handleInputChange}
            placeholder="Search.."
            className={classes.input}
          />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SearchComponent);
