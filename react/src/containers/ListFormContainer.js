import React, { Component } from 'react';
import TextField from '../components/TextField'

class ListFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
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
      body: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {post: {
      body: this.state.body
    }}
    this.props.addNewPost(formPayload);
    this.handleClearForm(event);
  }

  render() {
    return(
      <div>
        <form className="new-post-form collapse small-12 small-centered column" autoComplete="off" onSubmit={this.handleFormSubmit}>
          <h8>Add Post:</h8>
          <TextField
            content={this.state.body}
            name="body"
            handleChange={this.handleChange}
          />

          <ul className="button-group centered">
            <li><input className="button centered less" type="submit" value="Submit" /></li>
            <li><button className="button centered less" onClick={this.handleClearForm}>Clear</button></li>
          </ul>
        </form>
      </div>
    )
  }
}

export default ListFormContainer;
