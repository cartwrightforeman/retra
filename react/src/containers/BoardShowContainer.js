import React, { Component } from 'react';
import ListShowContainer from '../containers/ListShowContainer'

class BoardShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
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
            <div className="action list">
              <ListShowContainer
                title = {"Action"}
                boardID = {1}
                listID = {4}
              />
            </div>
            <div className="discussion list">
              <ListShowContainer
                title = {"Discussion"}
                boardID = {1}
                listID = {5}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardShowContainer;
