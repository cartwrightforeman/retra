import React, { Component } from 'react';
import PostTile from '../components/PostTile'
import ListFormContainer from '../containers/ListFormContainer'

class ListShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    this.addNewPost = this.addNewPost.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/lists/1/posts/.json`)
    .then(response => {
      return response.json();
    })
    .then(body => {
      this.setState({ posts: body.posts})
    })
  }

  addNewPost(formPayload){
    fetch(`/api/v1/lists/1/posts/`, {
      method: 'POST',
      credentials: 'same-origin',
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
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDelete(id){
    fetch(`/api/v1/lists/1/posts/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        let reload = 2
        if (reload % 2 === 0) {
          reload += 1
          location.reload()
        }
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let posts = this.state.posts.map((post, index) =>{

      return(
        <PostTile
          key = {index}
          postID = {post.id}
          body = {post.body}
          handleDelete = {this.handleDelete}
        />
      )
    })
    return(
      <div>
        {posts}
        <ListFormContainer
          addNewPost = {this.addNewPost}
        />
      </div>
    )
  }
}

export default ListShowContainer;
