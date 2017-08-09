import React from 'react';

const BoardTile = (props) => {
  return (
    <div className="board-tile small-5 column end">
      <a href={'/boards/' + props.boardID}>{props.name}</a>
    </div>
  );
}

export default BoardTile;
