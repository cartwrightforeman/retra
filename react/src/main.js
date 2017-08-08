import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

document.addEventListener('DOMContentLoaded', function() {
  let appDiv = document.getElementById('app');

  let userID;

  if(appDiv){
    userID = appDiv.dataset.user_id
  }

  ReactDOM.render(
    <App userID={userID} />,
    appDiv
  )
})
