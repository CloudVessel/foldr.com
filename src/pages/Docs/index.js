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
    docs: {},
    isLoadingDocs: false,
    version: '0.0.0',
  }

  /**
   *
   */
  componentDidMount() {
    this.handleFetchDocs();
  }

  /**
   *
   */
  handleFetchDocs = async () => {
    const { version } = this.state;

    this.setState({ isLoadingDocs: true });

    try {
      const { data } = await getDocs(version);

      this.setState({
        docs: data.docs,
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
          funcs={Object.keys(docs)}
        />
        This is docs
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Docs));
