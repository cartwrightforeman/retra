import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import BoardShowContainer from '../src/containers/BoardShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={BoardShowContainer}/>
    </Router>
  )
};


export default App;
