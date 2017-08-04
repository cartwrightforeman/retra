import React, { Component } from 'react';
import TextField from './TextField'

class PostTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      body: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this)
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
      editing: false,
      body: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {post: {
      body: this.state.body
    }}
    let id = this.props.postID
    this.props.updatePost(formPayload, id);
    this.handleClearForm(event);
  }

  toggleEdit() {
    this.setState({ editing: true })
  }

  render() {
    let post;
    if (this.state.editing) {
      post = (
        <form onSubmit={this.handleFormSubmit} autoComplete="off">
          <label onChange={this.handleChange}>
            <input
              name='body'
              type='text'
              defaultValue={this.props.body}
              autoComplete="off"
            />
          </label>
        </form>
      )
    } else {
      post = (
        <span className=" small-12 columns post panel">
          <span className="posty">
            <i className="fa fa-times" onClick={() => this.props.handleDelete(this.props.postID)} aria-hidden="true"></i>
            &nbsp;<br></br>
            <i className="fa fa-pencil-square-o" onClick={this.toggleEdit} aria-hidden="true"></i>
          </span>
          <p className="post-text">{this.props.body}</p>
        </span>
      )
    }

    return (
      <span>
        {post}
      </span>
    )
  }
}

export default PostTile;
