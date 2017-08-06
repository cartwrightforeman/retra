import React, { Component } from 'react';
import TextField from '../components/TextField'

class BoardFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {board: {
      name: this.state.name
    }}
    this.props.addNewBoard(formPayload);
    this.handleClearForm(event);
  }

  render() {
    return(
      <div className="row panel" autoComplete="off" >
        <form className="collapse small-12 small-centered column" onSubmit={this.handleFormSubmit}>
          <h8>New Board:</h8>
          <TextField
            content={this.state.name}
            name="name"
            handleChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default BoardFormContainer;
