import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
// import BoardTile from '../components/BoardTile'
import SortableList from '../containers/SortableList'
import BoardFormContainer from '../containers/BoardFormContainer'

class BoardsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: [],
      id: ''
    }
    this.onSortEnd = this.onSortEnd.bind(this);
    this.addNewBoard = this.addNewBoard.bind(this)
    this.sendID = this.sendID.bind(this)
  }

  componentDidMount() {
    fetch('api/v1/boards.json', {
      credentials: 'same-origin'
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        boards: body.boards
      })
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

  updateBoardTiles(boards) {
    let data = {boards: boards};
    let jsonStringData = JSON.stringify(data);
    // find a way to get ID!
    debugger;
    // let boardId = this.props.match.params.id;
    fetch(`/api/v1/boards/${this.state.id}/`, {
      method: 'PATCH',
      body: jsonStringData
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      blocks: arrayMove(this.state.boards, oldIndex, newIndex)
    });
    this.updateBoardTiles(this.state.boards)
  }

  sendID(iD) {
    console.log('sendID function')
    this.setState({ id: iD})
  }

  render() {
    console.log(this.state.id)
    console.log(this.state.blocks)
    return(
      <div>
        <div className="row boards-header small-centered">
          <h1 className="boards">Boards</h1>
        </div>
        <div className="row">
          <div className="column boards-section small-6">
          <SortableList
            boards={this.state.boards}
            onSortEnd={this.onSortEnd}
            sendID={this.sendID}
          />
          </div>
          <div className="column small-6">
            <BoardFormContainer
              addNewBoard = {this.addNewBoard}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default BoardsIndexContainer
