import React, { Component } from 'react';
import ListShowContainer from '../containers/ListShowContainer'

class BoardShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div className="row collapse">
          <div className="small-3 column">
            <ListShowContainer
            />
          </div>
          <div className="Meh small-3 column">
          <ListShowContainer
          />
          </div>

          <div className="Sad small-3 column">
          <ListShowContainer
          />
          </div>

          <div className="Sad small-3 column">
          <ListShowContainer
          />
          <ListShowContainer
          />
          </div>
        </div>
      </div>
    )
  }
}

export default BoardShowContainer;
