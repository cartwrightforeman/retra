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



























































// <div className="happy list collapse small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
//   <ListShowContainer
//     title = {"Happy"}
//     boardID = {1}
//     listID = {1}
//   />
// </div>
// <div className="meh list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
//
//   <ListShowContainer
//     title = {"Meh"}
//     boardID = {1}
//     listID = {2}
//   />
// </div>
//
// <div className="sad list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
//   <ListShowContainer
//     title = {"Sad"}
//     boardID = {1}
//     listID = {3}
//   />
// </div>
//
//   <div className="double small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
//   <div className="action mini list">
//     <ListShowContainer
//       title = {"Action"}
//       boardID = {1}
//       listID = {4}
//     />
//   </div>
//   <div className="discussion mini bottom list">
//     <ListShowContainer
//       title = {"Discussion"}
//       boardID = {1}
//       listID = {5}
//     />
//   </div>
// </div>
