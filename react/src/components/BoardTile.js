import React from 'react';

const BoardTile = (props) => {
  return (
    <div className="board-tile small-5 medium-4 large-2 columns end">
      <a href={'/boards/' + props.boardID}>{props.name}</a>
    </div>
  );
}

export default BoardTile;
