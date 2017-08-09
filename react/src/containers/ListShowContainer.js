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
    this.updatePostText = this.updatePostText.bind(this)
    this.updatePostVotes = this.updatePostVotes.bind(this)
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      posts: arrayMove(this.state.posts, oldIndex, newIndex),
    });
  };

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

  updatePostText(formPayload, id){
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
      newArr = newArr.concat(responseData.posts)
      newArr = newArr.sort(function(a,b) {
        return a.votes - b.votes;
      });
      this.setState({ posts: newArr })
    })
    .catch(error => console.error(`Error in fetch patch: ${error.message}`))
  }

  updatePostVotes(formPayload, id){
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
      newArr = newArr.concat(responseData.posts)
      // newArr = newArr.sort(function(a,b) {
      //   return a.votes - b.votes;
      // });
      this.setState({ posts: newArr })
    })
    .catch(error => console.error(`Error in fetch patch: ${error.message}`))
  }

  render(){
    let posts = this.state.posts.map((post, index) => {
      // debugger;
      return(
        <PostTile
          key = {index}
          postID = {post.id}
          body = {post.body}
          votes = {post.votes}
          handleDelete = {this.handleDelete}
          updatePostText = {this.updatePostText}
          updatePostVotes = {this.updatePostVotes}
          onSortEnd = {this.onSortEnd}
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
