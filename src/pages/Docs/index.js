import React from 'react';
import { withRouter } from 'react-router-dom';

const Docs = (props) => {
  const { history } = props;

  console.log(history);

  return (
    <div>
      This is docs
    </div>
  );
};

export default withRouter(Docs);
