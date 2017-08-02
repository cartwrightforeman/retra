import React from 'react';

const PostTile = (props) => {
  return (
    <span>
      <span className="small-11 columns">
        <p>{props.body}</p>
      </span>
      <div>
        <i className="fa fa-times" onClick={props.handleDelete.bind(this, props.postID)} aria-hidden="true"></i>
      </div>
    </span>
  )
}

export default PostTile;
