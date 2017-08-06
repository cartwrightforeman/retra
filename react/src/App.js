import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import BoardShowContainer from '../src/containers/BoardShowContainer'
import BoardsIndexContainer from '../src/containers/BoardsIndexContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={BoardsIndexContainer}/>
      <Route path='/boards/:board_id' component={BoardShowContainer}/>
    </Router>
  )
};


export default App;
