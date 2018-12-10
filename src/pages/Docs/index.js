import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Body from '../../components/Body';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { getDocs } from '../../services/docs';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.foreground.secondary,
  },
});

/**
 * Docs Component
 * @returns {React.Component} - Docs
 */
class Docs extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  }

  /**
   * The Doc component constructor
   * @param {Object} props - component props
   */
 *
 */
class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: {
        categories: {},
      },
      filteredCategories: {},
      isSearching: false,
      isLoadingDocs: false,
      version: '0.0.0',
      selectedFunction: this.findSelectedFuncFromParams(),
    };
  }

  /**
   * Handles fetching the documentation JSON file after initial mount
   * @returns {void}
   */
  componentDidMount() {
    this.handleFetchDocs();
  }

  findSelectedFuncFromParams = () => {
    console.log(this.props);

    return null;
  }

  /**
   * Sorts functions by their categories
   * @param {Object} functions - object of functions
   * @returns {Object} - object with nested category arrays
   */
  sortFunctionsByCategory = (functions) => {
    const categories = {};

    Object.keys(functions).forEach((key) => {
      const funcCategories = functions[key] && functions[key].categories;

      if (funcCategories) {
        funcCategories.forEach((cat) => {
          if (!categories[cat]) {
            categories[cat] = [];
          }

          categories[cat].push(functions[key]);
        });
      }
    });

    return categories;
  }

  /**
   * Handler for function search functionality
   * @param {string} term - the search term
   * @returns {void}
   */
  handleFunctionSearch = (term) => {
    if (!term.length) {
      return this.setState({
        isSearching: false,
        selectedFunction: null,
      });
    }

    const { docs } = this.state;
    const filteredCategories = { };

    Object.keys(docs.categories).forEach((type) => {
      docs.categories[type].forEach((func) => {
        if (func.name.toLowerCase().includes(term.toLowerCase())) {
          if (!filteredCategories[type]) {
            filteredCategories[type] = [];
          }

          this.handleSelectedFunctionChange(func)();

          filteredCategories[type].push(func);
        }
      });
    });

    return this.setState({
      isSearching: true,
      filteredCategories,
    });
  }

  /**
   * Sets the state of the selected function
   * @param {Object} selectedFunction - the selected function
   * @returns {void}
   */
  handleSelectedFunctionChange = selectedFunction => () =>
    this.setState({ selectedFunction });

  /**
   * Fetches documentation JSON file
   * @returns {void}
   */
  handleFetchDocs = async () => {
    const { version } = this.state;

    this.setState({ isLoadingDocs: true });

    try {
      const { data } = await getDocs(version);

      const categories = this.sortFunctionsByCategory(data.docs);

      this.setState({
        docs: {
          categories,
        },
      });
    } catch (e) {
      // TODO: handle error from doc response
    } finally {
      this.setState({ isLoadingDocs: false });
    }
  };

  /**
   * @inheritDoc
   */
  render() {
    const {
      docs,
      isSearching,
      isLoadingDocs,
      selectedFunction,
      filteredCategories,
    } = this.state;

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header
          onFunctionSearch={this.handleFunctionSearch}
        />
        <Sidebar
          isSearching={isSearching}
          isLoadingDocs={isLoadingDocs}
          onSelectedFunction={this.handleSelectedFunctionChange}
          funcs={isSearching ? filteredCategories : docs.categories}
          selectedFunction={selectedFunction}
        />
        <Body
          selectedFunction={selectedFunction}
        />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Docs));
