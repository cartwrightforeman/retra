import React, { Component } from 'react';
import ListShowContainer from '../containers/ListShowContainer'
import { Link } from 'react-router';

class BoardShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      board: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/boards/${this.props.params.board_id}.json`, {
      credentials: 'same-origin'
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ board: body.board})
    })
    fetch(`/api/v1/boards/${this.props.params.board_id}/lists.json`)
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ lists: body.lists })
    })
  }

  render() {
    let boardID = this.props.params.board_id
    let lists = this.state.lists.map((list, index) => {
      let size;
      if (index === 3 || index === 4 ) {
        size = "mini"
      }

      return(
        <div className={size + " list collapse small-11 small-centered medium-8 medium-centered large-uncentered large-3 column " + "class" + index }>
          <ListShowContainer
            key = {index + 1}
            index = {index + 1}
            title = {list.title}
            listID = {list.id}
            boardID = {boardID}
          />
        </div>
      )
    })

    return(
      <div>
        <div className="board collapse small-11 small-centered">
          {lists}
        </div>
      </div>
    )
  }
}

export default BoardShowContainer;
