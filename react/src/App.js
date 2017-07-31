import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ListContainer from '../src/containers/ListContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={ListContainer}/>
    </Router>
  )
};


export default App;
