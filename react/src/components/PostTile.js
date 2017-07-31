import React from 'react';

const PostTile = (props) => {
  return (
    <div className="post-tile small-5 medium-4 large-2 columns end">
      {props.body}
    </div>
  )
}

export default PostTile;
