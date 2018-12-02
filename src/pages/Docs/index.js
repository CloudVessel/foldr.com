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
    backgroundColor: theme.palette.foreground.secondary,
  },
});

/**
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
   *
   */
  componentDidMount() {
    this.handleFetchDocs();
  }

  findSelectedFuncFromParams = () => {
    console.log(this.props);

    // console.log('here', router);

    return null;
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
        <Body
          selectedFunction={selectedFunction}
        />
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Docs));
