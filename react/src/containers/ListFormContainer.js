import React, { Component } from 'react';
import BodyField from '../components/BodyField'

class ListFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: [],
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.validateEmptyFields = this.validateEmptyFields.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
    this.validateEmptyFields(name, value)
  }

  validateEmptyFields(name, field) {
    let message = `Hey you left ${name} blank! `;
    let errorArray = [...this.state.error, message];
    if (field === null || field === "" || field === " ") {
      this.setState({error: errorArray})
    } else {
      if (errorArray.includes(message)) {
        let newError = this.state.error.filter((error) => {
          return error !== message
        })
        this.setState({ error: newError })
      }
    }
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
    let reload = 2
    if (reload % 2 === 0) {
      reload += 1
      location.reload()
    }
  }

  render() {

    let errors;
    if (this.state.error) {
      errors = this.state.error.map((error) => {
        return ( <p>{error}</p> )
      })
    }
    return(
      <div>
        {errors}
        <form className="new-post-form callout small-8 small-centered column" onSubmit={this.handleFormSubmit}>
          <h8>Add Post:</h8>
          <BodyField
            content={this.state.body}
            name="body"
            handleChange={this.handleChange}
          />

          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            &nbsp; &nbsp;
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

// <input
//   type="text"
// />

export default ListFormContainer;
