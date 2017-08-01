import React from 'react';

const PostTile = (props) => {
  return (
    <div className="post-tile small-11 small-centered panel columns">
      {props.body}
    </div>
  )
}

export default PostTile;
