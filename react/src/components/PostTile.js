import React, { Component } from 'react';
import TextField from './TextField'

class PostTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      body: '',
      votes: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
    this.prepareVotes = this.prepareVotes.bind(this)
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
      body: '',
      votes: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {post: {
      body: this.state.body
    }}
    let id = this.props.postID
    this.props.updatePostText(formPayload, id);
    this.handleClearForm(event);
  }

  prepareVotes() {
    let formPayload = {post: {
      votes: this.state.votes
    }}
    let id = this.props.postID
    this.props.updatePostVotes(formPayload, id);
    this.handleClearForm(event);
  }

  handleUpvote(event) {
    event.preventDefault();
    let newUpvote = this.props.votes + 1
    this.setState({ votes: newUpvote}, this.prepareVotes)
  }

  handleDownvote(event) {
    event.preventDefault();
    let newDownvote = this.props.votes - 1
    this.setState({ votes: newDownvote}, this.prepareVotes)
  }

  toggleEdit() {
    this.setState({ editing: true })
  }

  render() {
    let post;
    if (this.state.editing) {
      post = (
        <form onSubmit={this.handleFormSubmit} autoComplete="off" >
          <label onChange={this.handleChange}>
            <input className="edit"
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
        <span className="post">
          <span className="vote-items">
            <i className="fa fa-angle-up up" onClick={this.handleUpvote} aria-hidden="true"></i>
            <div className="votes">{this.props.votes}</div>
            <i className="fa fa-angle-down down" onClick={this.handleDownvote} aria-hidden="true"></i>
          </span>
          <span className="small-11 post columns panel">
            <span className="delete-button">
              <i className="fa fa-times" onClick={() => this.props.handleDelete(this.props.postID)} aria-hidden="true"></i>
            </span>
            <p className="post-text" onClick={this.toggleEdit}>{this.props.body}</p>
          </span>
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
