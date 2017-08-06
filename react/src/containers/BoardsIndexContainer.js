import React, { Component } from 'react';
import BoardTile from '../components/BoardTile'

class BoardsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: []
    }
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
        <h1>Hi from boardsindex!</h1>
        {boards}
      </div>
    )
  }
}


export default BoardsIndexContainer
