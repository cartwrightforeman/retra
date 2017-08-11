import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const BoardTile = SortableElement((props) => {
  let board = props.board
  // debugger;
  return (
    <div className="board-tile small-5 column end">
      <a href={'/boards/' + board.id}><button>{board.name}</button></a><button onClick={props.handleClick}>Save change</button>
    </div>
  );
})

export default BoardTile;
