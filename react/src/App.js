import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ListShowContainer from '../src/containers/ListShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={ListShowContainer}/>
    </Router>
  )
};


export default App;
