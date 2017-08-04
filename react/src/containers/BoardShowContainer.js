import React, { Component } from 'react';
import ListShowContainer from '../containers/ListShowContainer'
import { Link } from 'react-router';
import BoardFormContainer from '../containers/BoardFormContainer'
// <Link to={`/new-board`}>New Board</Link>

class BoardShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
    console.log('debugger in BoardShow')
    this.addNewBoard = this.addNewBoard.bind(this)
  }

  addNewBoard(formPayload){
    fetch(`/api/v1/boards`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ posts: [...this.state.posts, responseData] })
    })
    .catch(error => console.error(`Error in fetch post: ${error.message}`));
  }

  render() {
    let lists = this.state.lists.map((list, index) => {
      return(
        <ListShowContainer
          title = {"Happy"}
          boardID = {1}
          listID = {1}
        />
      )
    })

    return(
      <div>
        <div className="row collapse small-12">
          <div className="happy list collapse small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
            <ListShowContainer
              title = {"Happy"}
              boardID = {1}
              listID = {1}
            />
          </div>
          <div className="meh list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">

            <ListShowContainer
              title = {"Meh"}
              boardID = {1}
              listID = {2}
            />
          </div>

          <div className="sad list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
            <ListShowContainer
              title = {"Sad"}
              boardID = {1}
              listID = {3}
            />
          </div>

            <div className="double small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
            <div className="action mini list">
              <ListShowContainer
                title = {"Action"}
                boardID = {1}
                listID = {4}
              />
            </div>
            <div className="discussion mini bottom list">
              <ListShowContainer
                title = {"Discussion"}
                boardID = {1}
                listID = {5}
              />
            </div>
          </div>
        </div>
        <BoardFormContainer
          addNewBoard = {this.addNewBoard}
        />
      </div>
    )
  }
}

export default BoardShowContainer;
