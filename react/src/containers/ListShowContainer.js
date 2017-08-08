import React, { Component } from 'react';
import PostTile from '../components/PostTile'
import ListFormContainer from '../containers/ListFormContainer'

class ListShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: ['']
    }
    this.addNewPost = this.addNewPost.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.updatePost = this.updatePost.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/boards/${this.props.boardID}/lists/${this.props.listID}/posts.json`)
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ posts: body.posts})
    })
  }

  addNewPost(formPayload){
    fetch(`/api/v1/boards/${this.props.boardID}/lists/${this.props.listID}/posts`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ posts: [...this.state.posts, responseData] })
    })
    .catch(error => console.error(`Error in fetch post: ${error.message}`));
  }

  handleDelete(id){
    fetch(`/api/v1/boards/${this.props.boardID}/lists/${this.props.listID}/posts/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(res => res.json())
    // when working with response, do .json
    .then(json => {
      this.setState({ posts: json })
    })
    .catch(error => console.error(`Error in fetch delete: ${error.message}`));
  }

  updatePost(formPayload, id){
    fetch(`/api/v1/boards/${this.props.boardID}/lists/${this.props.listID}/posts/${id}`, {
      method: 'PATCH',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseData => {
      var newArr = this.state.posts.filter(post => {
        return post.id !== responseData.posts.id
      })
      // newArr.sort() by rank when implemented
      this.setState({ posts: [...newArr, responseData.posts] })
    })
    .catch(error => console.error(`Error in fetch patch: ${error.message}`))
  }

  render(){
    let posts = this.state.posts.map((post, index) => {
      return(
        <PostTile
          key = {index}
          postID = {post.id}
          body = {post.body}
          votes = {post.votes}
          handleDelete = {this.handleDelete}
          updatePost = {this.updatePost}
        />
      )
    })

    return(
      <div>
        <h1 className="z">{this.props.title}</h1>
        <div className="row post-tile">
          {posts}
        </div>
        <ListFormContainer
          addNewPost = {this.addNewPost}
        />
      </div>
    )
  }
}

export default ListShowContainer;
