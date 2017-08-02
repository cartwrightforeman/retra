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
          listID = {1}
        />
      )
    })

    return(
      <div>
        <div className="row collapse small-12">
          <div className="happy list collapse small-3 column">
            <ListShowContainer
              title = {"Happy"}
              listID = {1}
            />
          </div>
          <div className="meh list small-3 column">

            <ListShowContainer
              title = {"Meh"}
              listID = {2}
            />
          </div>

          <div className="sad list small-3 column">
            <ListShowContainer
              title = {"Sad"}
              listID = {3}
            />
          </div>

            <div className="double small-3 column">
            <div className="action list">
              <ListShowContainer
                title = {"Action"}
                listID = {4}
              />
            </div>
            <div className="discussion list">
              <ListShowContainer
                title = {"Discussion"}
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
