import React, { Component } from 'react';
import BoardTile from '../components/BoardTile'
import BoardFormContainer from '../containers/BoardFormContainer'

class BoardsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: []
    }
    this.addNewBoard = this.addNewBoard.bind(this)
  }

  componentDidMount() {
    fetch('api/v1/boards.json', {
      credentials: 'same-origin'
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({ boards: body.boards })
    })
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
      this.setState({ boards: [...this.state.boards, responseData] })
    })
    .catch(error => console.error(`Error in fetch post: ${error.message}`));
  }


  render() {
    let boards = this.state.boards.map((board, index) => {
      return(
        <BoardTile
          key = { index + 1 }
          boardID = { board.id }
          name = { board.name }
        />
      )
    })
    return(
      <div>
        <div className="row small-centered">
          <h1>ALL ABOARD</h1>
        </div>
        <div className="row">
          {boards}
          &nbsp;

          <BoardFormContainer
            addNewBoard = {this.addNewBoard}
          />
        </div>
      </div>
    )
  }
}


export default BoardsIndexContainer
