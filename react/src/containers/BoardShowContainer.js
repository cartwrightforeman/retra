import React, { Component } from 'react';
import ListShowContainer from '../containers/ListShowContainer'

class BoardShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
    this.renderText =this.renderText.bind(this)
  }

  // renderText() {
  //   document.getElementById('thebox').value='Ta-da!'
  //   // pass down value and elementid as props and fill in that way
  // }
  // <input type="text" id="thebox" value=""></input>
  // <input type="button" value="Make code appear in text box!" onClick={this.renderText}></input>

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
          <div className="happy list collapse small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
            <ListShowContainer
              title = {"Happy"}
              listID = {1}
            />
          </div>
          <div className="meh list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">

            <ListShowContainer
              title = {"Meh"}
              listID = {2}
            />
          </div>

          <div className="sad list small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
            <ListShowContainer
              title = {"Sad"}
              listID = {3}
            />
          </div>

            <div className="double small-11 small-centered medium-8 medium-centered large-uncentered large-3 column">
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
