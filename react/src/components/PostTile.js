import React from 'react';

const PostTile = (props) => {
  return (
    <span>
      <span className=" small-12 columns post panel">
      <span className="posty">
        <i className="fa fa-times" onClick={props.handleDelete.bind(this, props.postID)} aria-hidden="true"></i>
        &nbsp;<br></br>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </span>
        <p className="post-text">{props.body}</p>
      </span>

    </span>
  )
}

export default PostTile;
