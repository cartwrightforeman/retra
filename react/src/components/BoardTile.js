import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const BoardTile = SortableElement((props) => {
  let board = props.board
  return (
    <div className="board-tile small-10 column end" >
      <a href={'/boards/' + board.id}><button className="board-button round button">{board.name}</button></a>
    </div>
  );
})

export default BoardTile;
