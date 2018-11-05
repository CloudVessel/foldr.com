import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      This is home
      <Link to="docs" path="/docs">Docs</Link>
    </div>
  );
};

export default Home;
