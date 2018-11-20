import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

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
    isLoadingDocs: false,
    version: '0.0.0',
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
    const { isLoadingDocs, docs } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Sidebar
          isLoadingDocs={isLoadingDocs}
          funcs={docs.categories}
        />
        This is docs
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Docs));
