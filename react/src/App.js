import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import BoardShowContainer from '../src/containers/BoardShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={BoardShowContainer}/>
      <Route path='/boards/:board_id' component={BoardShowContainer}/>
    </Router>
  )
};


export default App;

// <Route path='/new-board' component={}/>
// <Route path='/boards/:board_id/lists/@Board.lists' component={BoardShowContainer}/>
