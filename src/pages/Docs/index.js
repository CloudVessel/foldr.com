import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Body from '../../components/Body';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { getDocs } from '../../services/docs';

const styles = theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
});

/**
 *
 */
class Docs extends React.Component {
  state = {
    docs: {
      categories: {},
    },
    filteredCategories: {},
    isSearching: false,
    isLoadingDocs: false,
    version: '0.0.0',
    selectedFunction: null,
  }

  /**
   *
   */
  componentDidMount() {
    this.handleFetchDocs();
  }

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

  handleFunctionSearch = (term) => {
    if (!term.length) {
      return this.setState({
        isSearching: false,
      });
    }

    const { docs } = this.state;
    const filteredCategories = { };

    Object.keys(docs.categories).forEach((type) => {
      docs.categories[type].forEach((func) => {
        if (func.name.includes(term)) {
          if (!filteredCategories[type]) {
            filteredCategories[type] = [];
          }

          filteredCategories[type].push(func);
        }
      });
    });

    this.setState({
      isSearching: true,
      filteredCategories,
    });
  }

  handleSelectedFunctionChange = selectedFunction => () =>
    this.setState({ selectedFunction });

  /**
   *
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
   *
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
        />
        <Body selectedFunction={selectedFunction} />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Docs));
