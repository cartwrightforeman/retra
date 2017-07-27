import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import TestContainer from '../src/containers/TestContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={TestContainer}/>
    </Router>
  )
};

export default App;
